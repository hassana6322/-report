# Handoff: منصة تمهيد (Tamheed Platform)

## Overview
Tamheed is an Arabic-first (RTL) offline-capable workspace for the **الموجّه الطلابي** (student counselor) in Saudi secondary schools. It helps prepare, draft and document counseling work before entering it into the ministry's Noor system, and produces print-ready A4 PDFs with a unified official letterhead (ديباجة).

## About the Design Files
The files in this bundle are **design references built in HTML** — a working prototype showing intended look and behavior, not production code to ship as-is. The task is to **recreate this prototype in the target codebase's environment** (e.g. React/Next.js, Vue) using its established patterns. If no environment exists yet, a React + Vite (or Next.js) SPA with local-only storage is the closest fit to how the prototype behaves.

- `منصة تمهيد v3.dc.html` — the primary, live source. It is a "Design Component": the markup lives between `<x-dc>…</x-dc>` with `{{ holes }}`, `<sc-if>` / `<sc-for>` control flow, and a logic class (`class Component extends DCLogic`) inside `<script data-dc-script>` that behaves like a React class component (`state`, `setState`, `renderVals()` returning the template's values). `support.js` is the runtime that renders it; open the file in a browser (served over http) to run it.
- `منصة تمهيد - نسخة للموقع.html` — a self-contained offline build (older snapshot; it does **not** yet include the psychosocial contact form or the weekly follow-up form). Use `v3` as the source of truth.

## Fidelity
**High-fidelity.** Colors, typography, spacing, print layouts, copy and interactions are final. Recreate pixel-accurately, especially the A4 print sheets.

## Global Layout
- `dir="rtl"`, `lang="ar"` everywhere.
- Lock screen (password) → app shell.
- App shell: right-side navigation rail (sections list) + main area. Home shows service cards; each service opens a two-column workspace:
  - **Form column** (white card, radius 20px, shadow `0 6px 20px rgba(0,56,69,.10)`, padding 18px, vertical gap 18px).
  - **A4 preview column** (`#eef2f4` panel, radius 20px): a 794×1123px page scaled to fit, which is exactly what gets exported to PDF.
  - Grid: `repeat(auto-fit, minmax(360px, 1fr))`, gap 18px — stacks on narrow screens.

## Services (Screens)
1. **جداول الاختبارات** — exam schedules; pick exam type, duration, days, subjects; 18 poster designs (light/dark); PDF.
2. **الخطة الفصلية** — 18-week term plan with counseling programs and target values; signatures of counselor and principal.
3. **بوصلة التخصص** — two questionnaires (decision maturity, career interests) then soft-skills; student-facing encouraging version. Data in `questionnaires.global.js`.
4. **حصر معلومات الطلاب** — upload a spreadsheet of students → charts, follow-up tables, indicator reports.
5. **الجلسات الإرشادية** — session preparation form with discussion minutes.
6. **الرسائل** — ready messages to guardians (meeting invitations).
7. **نماذج التواصل مع ولي الأمر** — four types: سلوك، انخفاض المستوى الدراسي، الانضباط المدرسي، **نفسي واجتماعي**.
   - Each type: student data, guardian data, contact method, checklist of actions (items), "other" text, guardian acknowledgment, PDF.
   - **نفسي واجتماعي** has 4 aspect toggles (نفسي، تربوي، سلوكي، اجتماعي) — **multi-select, all optional**, with a "إلغاء التحديد" text button. Only selected aspects get a ✓ on the printed sheet.
   - Its 12 action items include item 6 (“تسليم ولي الأمر استمارة المتابعة الأسبوعية…”) — when checked, a button "فتح استمارة المتابعة الأسبوعية لهذا الطالب" appears and opens the weekly form prefilled (student name, section, guardian name/relation/phone into the first empty contact row).
   - Last item (`PROTECT`) is the child-protection item; checking it shows a sensitive-case alert.
   - **Footer of the printed sheet (pilot, to be rolled out to all sheets):** a 3px rounded line with gradient `linear-gradient(90deg,#218caa 0%,#0da9a6 50%,#5fdda9 100%)` spanning the width, and the Tamheed logo image (`assets/logo/tamheed-mark.png`, 26px tall) at the line's end. Must print with colors (`print-color-adjust: exact`).
8. **استمارة المتابعة الأسبوعية** (new) — family/school weekly follow-up:
   - Fields: student name, grade chips (أول/ثاني/ثالث ثانوي), section, week number, Hijri date; 3 contact rows (name, relation, phone).
   - Home indicators (خاص بالأسرة): 5 default statements, **editable, deletable, addable (max 7)**, "استعادة العبارات الأصلية" resets them.
   - School indicators (خاص بالمدرسة): 5 fixed statements.
   - Scale per statement (single choice, click again to clear): دائمًا، غالبًا، أحيانًا، نادرًا.
   - Joint assessment (single choice): تحسن ملحوظ (#07a869)، استقرار وتكيف تدريجي (#0da9a6)، ثبات الحالة دون تغيير (#c1b489)، تراجع يحتاج لتعديل الخطة (#b4532a). Plus notes.
   - Scores: each section % = mean of (دائمًا=3, غالبًا=2, أحيانًا=1, نادرًا=0) / 3.
   - "نسخة فارغة لتسليمها للأسرة" checkbox → prints without marks/notes.
   - Actions: تنزيل الاستمارة PDF · حفظ الأسبوع في السجل (saves {student, week, date, fam%, sch%, overall, notes}, replaces same student+week, clears marks, increments week) · إضافة إلى دراسة الحالة (appends a summary line to the case study's follow-up sessions).
   - Log per student: dot + bar colored by overall tone, delete per entry.
   - Alert: if the last two saved weeks are both "تراجع يحتاج لتعديل الخطة", show an amber notice (#fdf3e8 bg, #d9a24f border, #7a4e14 text) recommending plan review / committee / specialist.
9. **إحالة الطالب** — referral form linked to the counselor's file and case study; sensitive/abuse alerts.
10. **إجراءات الغياب** — ready letters per absence level.
11. **دراسة الحالة** — student data, problem, aspects, diagnosis, plan, follow-up sessions; suggested questions/techniques; sensitive-case alerts.
12. **متابعة الخطة** — 16 programs with actions and indicators, mapped to 12 verification indicators from the evaluation authority bulletin, with suggested evidence. Data in `plan-followup.global.js`.
13. **محضر اجتماع اللجنة** — counseling committee meeting minutes.

## Print Sheets (A4)
- Page: 794×1123px, white, padding ~24px 40px, column flex, gap ~9px.
- Letterhead: 3-column grid `160px | 1fr | 160px` — MOE logo (color, `assets/logo/moe-logo-trimmed.png`) on one side, centered lines (المملكة العربية السعودية / وزارة التعليم / الإدارة العامة للتعليم [region] / [school]) in #15445a bold 13.5px, school logo on the other. Logos same visual height. Below: double rule (2px + 1px, #15445a).
- Title 20px bold #15445a centered.
- Tables: 1px #15445a borders; header cells #15445a background, white bold text; body 14px.
- Signatures block at the bottom (guardian / counselor).
- PDF export uses html2pdf.js on the page node; filename built from form type + student + week.

## Security & Data
- Password lock (hashed), 7-clause usage policy acceptance.
- **All data local** (localStorage). Keys include `tamheed.case.v1`, `tamheed.weekly.v1`, and others in the logic class.
- Export / import a JSON backup containing all service states (incl. case study and weekly log).
- "Copy text" buttons to paste into Noor.

## Design Tokens
Ministry of Education design system (in `_ds/…/tokens/*.css`):
- Petrol `#15445a` (primary ink, headers), deep petrol `#003845`
- Green `#07a869`, dark green action `#05623c`, teal `#0da9a6`, dark teal text `#0b7f7d`, teal-blue `#218caa`, mint `#5fdda9`
- Sand `#c1b489`, warning brown `#b4532a`
- Neutrals: ink `#22333a`, muted `#5c686d`, hairline `#d5d5d5`, light dividers `#e8eaeb` / `#eef1f2`, canvas `#f2f2f2`, panel `#eef2f4`
- Logo gradient: `#218caa → #0da9a6 → #5fdda9`
- Font: `"Thmanyah Sans", "Bahij TheSansArabic", "Helvetica Neue", sans-serif` (font files in `_ds/…/assets/fonts`)
- Radii: cards 20px, inputs 12px, chips/buttons pill (99px)
- Buttons: min-height 44px, 13.5px bold; chips min-height 40px, 12.5px bold
- Motion: hover 140ms, state 220ms, progress 380ms, `cubic-bezier(.2,0,.2,1)`

## Assets
- `assets/logo/` — `moe-logo*.png` (ministry), `imam-school-*.png` (school logo), `tamheed-mark*.png` (platform logo: color / mono / white)
- `assets/icons/` — ministry icon set (PNG)
- `asset-map-v2.js` — maps asset paths to embedded data for the offline build
- `_ds/` — ministry tokens, fonts, component bundle

## Files
- `منصة تمهيد v3.dc.html` — full prototype (template + logic)
- `support.js` — prototype runtime (reference only)
- `questionnaires.global.js` — questionnaire items and scoring
- `plan-followup.global.js` — programs, indicators, evidence
- `asset-map-v2.js`, `assets/`, `_ds/`
- `CLAUDE.md` — project conventions (replies in Arabic, official term «الموجّه الطلابي»)
