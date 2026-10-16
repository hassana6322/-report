"""Build a single self-contained, offline index.html from the Tamheed v3 design component.

usage: build_offline.py <handoff_dir> <html2pdf.bundle.min.js> <react.production.min.js> <react-dom.production.min.js> <out.html>
(html2pdf.js@0.10.3, react@18.3.1, react-dom@18.3.1 — e.g. from `npm pack`)
"""
import base64, json, re, sys, pathlib

src_dir, html2pdf, react, react_dom, out = map(pathlib.Path, sys.argv[1:6])

DS = src_dir / "_ds/moe-design-system-ddd98866-727b-4854-b938-95c134b2fa59"
v3 = next(src_dir.glob("*v3.dc.html"))
html = v3.read_text(encoding="utf-8")

MIME = {".ttf": "font/ttf", ".woff2": "font/woff2", ".png": "image/png"}


def data_uri(p):
    return f"data:{MIME[p.suffix]};base64,{base64.b64encode(p.read_bytes()).decode()}"


def inline_css(path):
    css = path.read_text(encoding="utf-8")
    css = re.sub(r'@import\s+url\("([^"]+)"\);', lambda m: inline_css((path.parent / m.group(1)).resolve()), css)
    return re.sub(r'url\("(?!data:)([^"]+)"\)',
                  lambda m: f'url("{data_uri((path.parent / m.group(1)).resolve())}")', css)


def js(text):
    # Keep the HTML parser inside the script, and keep the runtime's text parser
    # (which looks for the first "<x-dc") from matching strings inside inlined code.
    text = text.replace("</script", "<\\/script").replace("<!--", "<\\!--")
    text = text.replace("<x-dc", "<\\x78-dc").replace("</x-dc", "<\\/\\x78-dc")
    return "<script>\n" + text + "\n</script>"


def remove_once(s, tag):
    assert s.count(tag) == 1, tag
    return s.replace(tag, "")


# 1. Design-system stylesheets: pull out of <helmet>, inline (with fonts) into <head>.
link_re = r'<link rel="stylesheet" href="([^"]+)">\n?'
head_css = "\n".join("<style>\n" + inline_css(src_dir / h) + "\n</style>" for h in re.findall(link_re, html))
html = re.sub(link_re, "", html)

# 2. Scripts from <helmet>: inline into <head> before the runtime.
ds_dir = "_ds/moe-design-system-ddd98866-727b-4854-b938-95c134b2fa59"
for tag in [
    f'<script src="{ds_dir}/_ds_bundle.js"></script>\n',
    '<script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.3/dist/html2pdf.bundle.min.js"></script>\n',
    '<script src="questionnaires.global.js"></script>\n',
    '<script src="plan-followup.global.js"></script>\n',
    '<script src="asset-map-v2.js"></script>\n',
]:
    html = remove_once(html, tag)
head_scripts = [react, react_dom, DS / "_ds_bundle.js", html2pdf,
                src_dir / "questionnaires.global.js", src_dir / "plan-followup.global.js",
                src_dir / "asset-map-v2.js"]

# 3. Literal asset paths in the template -> data URIs.
html = re.sub(r'(src|href)="(assets/[^"{]+\.png)"',
              lambda m: f'{m.group(1)}="{data_uri(src_dir / m.group(2))}"', html)

# 4. The runtime re-reads the page's raw text to recover the template with its
#    case-sensitive attributes (onInput, onChange…) via fetch(location.href),
#    which fails on file:// — embed the raw <x-dc> block and read it from there.
start, end = html.index("<x-dc>"), html.index("</x-dc>") + len("</x-dc>")
dc_src = json.dumps(html[start:end], ensure_ascii=False)
support = (src_dir / "support.js").read_text(encoding="utf-8")
fetch_self = 'fetch(location.href).then((res) => res.ok ? res.text() : "")'
assert support.count(fetch_self) == 1
support = support.replace(fetch_self,
    "(typeof window.__TAMHEED_DC_SRC === 'string' ? Promise.resolve(window.__TAMHEED_DC_SRC) : " + fetch_self + ")")

head = "\n".join(["<title>منصة تمهيد</title>", head_css]
                 + [js(p.read_text(encoding="utf-8")) for p in head_scripts]
                 + [js("window.__TAMHEED_DC_SRC = " + dc_src + ";"), js(support)])
html = remove_once(html, '<script src="./support.js"></script>\n').replace("</head>", head + "\n</head>", 1)
html = html.replace("<html>", '<html lang="ar" dir="rtl">', 1)

# Nothing may still point at a local file or the network.
leftover = re.findall(r'(?:src|href)="(?!data:|#)([^"{]+\.(?:js|css|png|ttf|woff2))"', html)
assert not leftover, leftover
assert "cdn.jsdelivr.net/npm/html2pdf" not in html

out.write_text(html, encoding="utf-8")
print(out, round(len(html.encode()) / 1e6, 2), "MB")
