/* @ds-bundle: {"format":4,"namespace":"MOEDesignSystem_ddd988","components":[{"name":"Decor","sourcePath":"components/brand/Decor.jsx"},{"name":"DiagChip","sourcePath":"components/brand/DiagChip.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"NumberedItem","sourcePath":"components/brand/NumberedItem.jsx"},{"name":"SectionDivider","sourcePath":"components/brand/SectionDivider.jsx"},{"name":"StatTile","sourcePath":"components/brand/StatTile.jsx"},{"name":"TitleBadge","sourcePath":"components/brand/TitleBadge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Decor.jsx":"c5780b205b48","components/brand/DiagChip.jsx":"f317a596180b","components/brand/Logo.jsx":"721c3cbd8d53","components/brand/NumberedItem.jsx":"2d16eebdad5b","components/brand/SectionDivider.jsx":"22537c4c530d","components/brand/StatTile.jsx":"d83f669f2d9f","components/brand/TitleBadge.jsx":"2d50baeb5dfa","components/core/Badge.jsx":"a09b816d6912","components/core/Button.jsx":"1a952fb38f2b","components/core/Card.jsx":"827fea9a86ad","components/core/Icon.jsx":"ff3bc24d8c34","components/core/IconButton.jsx":"6bf49a62659c","components/core/Tag.jsx":"1a67d953a44a","components/feedback/Alert.jsx":"da652dddf86a","components/feedback/Dialog.jsx":"0ff07f8465d5","components/feedback/ProgressBar.jsx":"d73aa1f07df2","components/forms/Checkbox.jsx":"d4cb229379cf","components/forms/Input.jsx":"e6955656c289","components/forms/Radio.jsx":"77da7e91c00b","components/forms/Select.jsx":"184b26cb86ee","components/forms/Switch.jsx":"22a03f197ac1","components/navigation/Breadcrumb.jsx":"6b9f70bf318d","components/navigation/Tabs.jsx":"adde3d0384bf","slides/deck-slides.jsx":"2e3fb3ae212a","ui_kits/documents/documents.jsx":"97e270a3b005","ui_kits/guide/guide-pages.jsx":"dc14cb938fdc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MOEDesignSystem_ddd988 = window.MOEDesignSystem_ddd988 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Decor.jsx
try { (() => {
/* Decorative brand furniture, all from supplied artwork:
   capsule outlines (45° stadium shapes), the blue dot grid, and the two hexagons. */
const FILES = {
  capsuleGreen: 'capsule-outline-green.png',
  capsulePurple: 'capsule-outline-purple.png',
  dotGrid: 'dot-grid-blue.png',
  hexPurple: 'hexagon-purple.png',
  hexTeal: 'hexagon-teal.png'
};
function Decor({
  kind = 'capsuleGreen',
  size = 220,
  base = '../../assets/patterns',
  opacity = 1,
  rotate = 0,
  style,
  ...rest
}) {
  return React.createElement('img', {
    ...rest,
    src: base + '/' + FILES[kind],
    alt: '',
    'aria-hidden': 'true',
    style: {
      width: size,
      height: 'auto',
      opacity,
      transform: rotate ? 'rotate(' + rotate + 'deg)' : undefined,
      pointerEvents: 'none',
      userSelect: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Decor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Decor.jsx", error: String((e && e.message) || e) }); }

// components/brand/DiagChip.jsx
try { (() => {
function DiagChip({
  children,
  tone = 'sky',
  style,
  ...rest
}) {
  const tones = {
    sky: {
      background: 'var(--moe-sky-bright)',
      color: 'var(--moe-ink)'
    },
    mint: {
      background: 'var(--moe-mint)',
      color: 'var(--moe-ink)'
    },
    violet: {
      background: 'var(--moe-violet)',
      color: 'var(--n-0)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--moe-purple)',
      boxShadow: 'inset 0 0 0 2px var(--moe-purple)'
    }
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 32,
      padding: '6px 26px',
      borderRadius: 'var(--radius-diag)',
      fontSize: 'var(--fs-slide-body)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.25,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { DiagChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DiagChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/* Approved lockups only. The files are the ministry's own artwork; never redraw them. */
const FILES = {
  color: 'moe-logo-trimmed.png',
  white: 'moe-logo-white.png',
  gradientPlate: 'moe-logo-gradient-bg.png',
  url: 'moe-url-wordmark.png'
};
function Logo({
  variant = 'color',
  height = 64,
  base = '../../assets/logo',
  clearSpace = false,
  style,
  ...rest
}) {
  const img = React.createElement('img', {
    ...rest,
    src: base + '/' + FILES[variant],
    alt: variant === 'url' ? 'www.moe.gov.sa' : 'وزارة التعليم — Ministry of Education',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
  if (!clearSpace) return img;
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      padding: height * 0.28
    }
  }, img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/NumberedItem.jsx
try { (() => {
function NumberedItem({
  index,
  title,
  children,
  tone = 'sky',
  icon = null,
  style,
  ...rest
}) {
  const tones = {
    sky: {
      background: 'var(--moe-sky-bright)',
      color: 'var(--moe-ink)'
    },
    steel: {
      background: 'var(--moe-steel-deep)',
      color: 'var(--n-0)'
    },
    violet: {
      background: 'var(--moe-violet-office)',
      color: 'var(--n-0)'
    },
    purple: {
      background: 'var(--moe-purple)',
      color: 'var(--n-0)'
    }
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--sp-4)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      width: 79,
      height: 79,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-tile)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      ...tones[tone]
    }
  }, icon || index), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--sp-1)'
    }
  }, title ? React.createElement('div', {
    style: {
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-snug)'
    }
  }, children)));
}
Object.assign(__ds_scope, { NumberedItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NumberedItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionDivider.jsx
try { (() => {
function SectionDivider({
  label,
  kicker,
  tone = 'ink',
  align = 'center',
  style,
  ...rest
}) {
  const bg = tone === 'ink' ? 'var(--moe-ink)' : tone === 'purple' ? 'var(--moe-purple)' : 'var(--moe-steel-deep)';
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, React.createElement('div', {
    style: {
      background: bg,
      color: 'var(--n-0)',
      borderRadius: 'var(--radius-badge-rtl)',
      minWidth: 298,
      height: 68,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px'
    }
  }, kicker ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-slide-footer)',
      opacity: .75,
      letterSpacing: 'var(--ls-wide)'
    }
  }, kicker) : null, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-slide-divider)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.1
    }
  }, label)), React.createElement('div', {
    style: {
      width: 'var(--rule-w)',
      height: 68,
      background: bg
    }
  }), React.createElement('div', {
    style: {
      width: 65,
      height: 68,
      background: bg,
      opacity: .9
    }
  }));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatTile.jsx
try { (() => {
function StatTile({
  value,
  label,
  caption,
  tone = 'plain',
  align = 'center',
  style,
  ...rest
}) {
  const tones = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-sm)'
    },
    purple: {
      background: 'var(--moe-purple)',
      color: 'var(--n-0)'
    },
    sky: {
      background: 'var(--moe-sky-bright)',
      color: 'var(--moe-ink)'
    },
    ink: {
      background: 'var(--moe-ink)',
      color: 'var(--n-0)'
    },
    steel: {
      background: 'var(--moe-steel-deep)',
      color: 'var(--n-0)'
    }
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-1)',
      borderRadius: 'var(--radius-tile)',
      padding: 'var(--sp-5) var(--sp-6)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...tones[tone],
      ...style
    }
  }, React.createElement('div', {
    className: 'moe-num',
    style: {
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.05
    }
  }, value), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      opacity: .9
    }
  }, label), caption ? React.createElement('div', {
    style: {
      fontSize: 'var(--fs-caption)',
      opacity: .7
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/TitleBadge.jsx
try { (() => {
function TitleBadge({
  children,
  tone = 'purple',
  size = 'md',
  corner = 'rtl',
  style,
  ...rest
}) {
  const tones = {
    purple: {
      background: 'var(--moe-purple)',
      color: 'var(--n-0)'
    },
    ink: {
      background: 'var(--moe-ink)',
      color: 'var(--n-0)'
    },
    teal: {
      background: 'var(--moe-teal)',
      color: 'var(--n-0)'
    },
    sky: {
      background: 'var(--moe-sky-bright)',
      color: 'var(--moe-ink)'
    }
  };
  const sizes = {
    sm: {
      height: 40,
      fontSize: 'var(--fs-body)',
      padding: '0 22px'
    },
    md: {
      height: 51,
      fontSize: 'var(--fs-slide-title)',
      padding: '0 28px'
    },
    lg: {
      height: 56,
      fontSize: 'var(--fs-slide-divider)',
      padding: '0 34px'
    }
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: corner === 'rtl' ? 'var(--radius-badge-rtl)' : 'var(--radius-badge)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      ...tones[tone],
      ...sizes[size],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { TitleBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TitleBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  purple: {
    background: 'var(--moe-purple)',
    color: 'var(--n-0)'
  },
  teal: {
    background: 'var(--moe-teal)',
    color: 'var(--n-0)'
  },
  sky: {
    background: 'var(--moe-sky-bright)',
    color: 'var(--moe-ink)'
  },
  ink: {
    background: 'var(--moe-ink)',
    color: 'var(--n-0)'
  },
  sand: {
    background: 'var(--moe-sand)',
    color: 'var(--moe-ink)'
  },
  neutral: {
    background: 'var(--n-100)',
    color: 'var(--text-body)'
  }
};
const shapes = {
  badge: 'var(--radius-badge-rtl)',
  pill: 'var(--radius-pill)',
  diag: 'var(--radius-diag)',
  soft: 'var(--radius-sm)'
};
function Badge({
  tone = 'purple',
  shape = 'pill',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '2px 10px' : '5px 14px';
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-block',
      padding: pad,
      borderRadius: shapes[shape],
      fontSize: size === 'sm' ? 'var(--fs-micro)' : 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.6,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-core)',
  fontWeight: 'var(--fw-bold)',
  border: 'var(--border-w) solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--motion-hover), transform var(--dur-instant) var(--ease-standard)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 14px',
    fontSize: 'var(--fs-body-sm)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 20px',
    fontSize: 'var(--fs-body)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 28px',
    fontSize: 'var(--fs-title)'
  }
};
const shapes = {
  pill: {
    borderRadius: 'var(--radius-pill)'
  },
  badge: {
    borderRadius: 'var(--radius-badge-rtl)'
  },
  diag: {
    borderRadius: 'var(--radius-diag)'
  },
  soft: {
    borderRadius: 'var(--radius-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-on-action)'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: 'var(--action-on-action)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-primary)',
    borderColor: 'var(--action-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-link)'
  },
  onInk: {
    background: 'var(--n-0)',
    color: 'var(--moe-ink)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-hover)'
  },
  outline: {
    background: 'var(--surface-purple-soft)'
  },
  ghost: {
    background: 'var(--surface-accent-soft)'
  },
  onInk: {
    background: 'var(--n-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  disabled = false,
  fullWidth = false,
  iconStart = null,
  iconEnd = null,
  as = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...shapes[shape],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    ...style
  };
  return React.createElement(Tag, {
    ...rest,
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const tones = {
  plain: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: 'var(--border-w) solid var(--border-subtle)'
  },
  ink: {
    background: 'var(--surface-ink)',
    color: 'var(--text-inverse)',
    border: 'var(--border-w) solid transparent'
  },
  purple: {
    background: 'var(--moe-purple)',
    color: 'var(--text-inverse)',
    border: 'var(--border-w) solid transparent'
  },
  teal: {
    background: 'var(--moe-sky-bright)',
    color: 'var(--moe-ink)',
    border: 'var(--border-w) solid transparent'
  },
  steel: {
    background: 'var(--moe-steel-deep)',
    color: 'var(--text-inverse)',
    border: 'var(--border-w) solid transparent'
  },
  soft: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--text-body)',
    border: 'var(--border-w) solid transparent'
  }
};
const shapes = {
  tile: 'var(--radius-tile)',
  diag: 'var(--radius-diag)',
  badge: 'var(--radius-badge-rtl)',
  square: 'var(--radius-none)'
};
function Card({
  tone = 'plain',
  shape = 'tile',
  elevation = 'sm',
  padding = 'var(--card-pad)',
  title,
  eyebrow,
  footer,
  children,
  style,
  ...rest
}) {
  const shadow = elevation === 'none' ? 'var(--shadow-none)' : elevation === 'md' ? 'var(--shadow-md)' : elevation === 'lg' ? 'var(--shadow-lg)' : 'var(--shadow-sm)';
  return React.createElement('div', {
    ...rest,
    style: {
      borderRadius: shapes[shape],
      padding,
      boxShadow: shadow,
      ...tones[tone],
      ...style
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      opacity: .7,
      marginBottom: 'var(--sp-2)'
    }
  }, eyebrow) : null, title ? React.createElement('div', {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-snug)',
      marginBottom: 'var(--sp-3)',
      color: 'inherit'
    }
  }, title) : null, children, footer ? React.createElement('div', {
    style: {
      marginTop: 'var(--sp-5)',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid currentColor',
      opacity: .75,
      fontSize: 'var(--fs-body-sm)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* The brand icon set ships as flat SVG files under assets/icons/. They carry their
   own brand colour, so they are rendered as images rather than inline paths. */
const ICON_NAMES = ['paper-plane', 'team-idea', 'team-energy', 'arrow-curve', 'arrow-up-curve', 'meeting-discussion', 'chart-growth', 'strategy-grid', 'presentation-chart', 'map-pin', 'calendar', 'stopwatch', 'buildings'];
function Icon({
  name,
  size = 24,
  base = '../../assets/icons',
  alt = '',
  style,
  ...rest
}) {
  return React.createElement('img', {
    ...rest,
    src: base + '/' + name + '.svg',
    alt,
    'aria-hidden': alt ? undefined : 'true',
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  });
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
const variants = {
  solid: {
    background: 'var(--action-primary)',
    color: 'var(--n-0)',
    border: 'none'
  },
  soft: {
    background: 'var(--surface-purple-soft)',
    color: 'var(--action-primary)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-primary)',
    border: 'var(--border-w) solid var(--border-subtle)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: 'none'
  }
};
const hovers = {
  solid: {
    background: 'var(--action-primary-hover)'
  },
  soft: {
    background: '#e3daf3'
  },
  outline: {
    background: 'var(--surface-purple-soft)',
    borderColor: 'var(--action-primary)'
  },
  ghost: {
    background: 'var(--surface-sunken)'
  }
};
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = true,
  label,
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  return React.createElement('button', {
    ...rest,
    'aria-label': label,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--motion-hover)',
      opacity: disabled ? 0.45 : 1,
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--n-0)',
      color: 'var(--text-body)',
      borderColor: 'var(--border-subtle)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      color: 'var(--moe-navy)',
      borderColor: 'var(--moe-sky-bright)'
    },
    purple: {
      background: 'var(--surface-purple-soft)',
      color: 'var(--moe-purple)',
      borderColor: '#cdbde8'
    }
  };
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '5px 12px',
      border: 'var(--border-w) solid',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      ...tones[tone],
      ...style
    }
  }, children, onRemove ? React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'إزالة',
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 'var(--fs-body)',
      lineHeight: 1,
      padding: 0
    }
  }, '×') : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const tones = {
  info: {
    bg: 'var(--status-info-soft)',
    bar: 'var(--status-info)',
    fg: 'var(--moe-navy)'
  },
  success: {
    bg: 'var(--status-success-soft)',
    bar: 'var(--status-success)',
    fg: '#0a5c3c'
  },
  warning: {
    bg: 'var(--status-warning-soft)',
    bar: 'var(--status-warning)',
    fg: '#7a5417'
  },
  danger: {
    bg: 'var(--status-danger-soft)',
    bar: 'var(--status-danger)',
    fg: '#7a2726'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = tones[tone];
  return React.createElement('div', {
    ...rest,
    role: 'status',
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'flex-start',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-4) var(--sp-5)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 'var(--radius-pill)',
      background: t.bar,
      flex: '0 0 auto'
    }
  }), React.createElement('div', {
    style: {
      flex: 1
    }
  }, title ? React.createElement('div', {
    style: {
      fontWeight: 'var(--fw-bold)',
      marginBottom: 'var(--sp-1)'
    }
  }, title) : null, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-snug)'
    }
  }, children)), onDismiss ? React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'إغلاق',
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1,
      padding: 0
    }
  }, '×') : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--overlay-ink)',
      backdropFilter: 'blur(var(--blur-glass))',
      padding: 'var(--sp-7)'
    }
  }, React.createElement('div', {
    ...rest,
    role: 'dialog',
    'aria-modal': 'true',
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-5) var(--sp-7)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title), onClose ? React.createElement('button', {
    onClick: onClose,
    'aria-label': 'إغلاق',
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 'var(--fs-h2)',
      lineHeight: 1,
      color: 'var(--text-muted)',
      padding: 0
    }
  }, '×') : null), React.createElement('div', {
    style: {
      padding: 'var(--sp-7)',
      fontSize: 'var(--fs-body)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      justifyContent: 'flex-start',
      padding: 'var(--sp-5) var(--sp-7)',
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  tone = 'teal',
  height = 10,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fills = {
    teal: 'var(--moe-teal)',
    purple: 'var(--moe-purple)',
    sky: 'var(--moe-sky-bright)',
    brand: 'var(--grad-brand)'
  };
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label || showValue ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, React.createElement('span', null, label), showValue ? React.createElement('span', {
    className: 'moe-num',
    style: {
      color: 'var(--text-muted)'
    }
  }, Math.round(pct) + '%') : null) : null, React.createElement('div', {
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemax': max,
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--n-100)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: fills[tone],
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-w-strong) solid ' + (checked ? 'var(--action-primary)' : 'var(--border-strong)'),
      background: checked ? 'var(--action-primary)' : 'var(--n-0)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--motion-hover)'
    }
  }, checked ? React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 12 12',
    'aria-hidden': 'true'
  }, React.createElement('path', {
    d: 'M1.5 6.5 4.5 9.5 10.5 2.5',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })) : null), React.createElement('input', {
    ...rest,
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'in-' + String(label || 'field').replace(/\s+/g, '-');
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: fid,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--moe-navy)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--status-danger)'
    }
  }, ' *') : null) : null, React.createElement('input', {
    ...rest,
    id: fid,
    type,
    value,
    onChange,
    placeholder,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: h,
      padding: '0 var(--field-pad-x)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--n-0)',
      border: 'var(--border-w) solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--moe-teal)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--motion-hover)'
    }
  }), error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-w-strong) solid ' + (checked ? 'var(--action-secondary)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--n-0)',
      transition: 'var(--motion-hover)'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action-secondary)'
    }
  }) : null), React.createElement('input', {
    ...rest,
    type: 'radio',
    name,
    value,
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  disabled = false,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sel-' + String(label || 'field').replace(/\s+/g, '-');
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: fid,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--moe-navy)'
    }
  }, label) : null, React.createElement('select', {
    ...rest,
    id: fid,
    value,
    onChange,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: h,
      padding: '0 var(--field-pad-x)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--n-0)',
      border: 'var(--border-w) solid ' + (focus ? 'var(--moe-teal)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--motion-hover)'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 44,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--action-secondary)' : 'var(--n-300)',
      position: 'relative',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--n-0)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), React.createElement('input', {
    ...rest,
    type: 'checkbox',
    role: 'switch',
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  separator = '‹',
  style,
  ...rest
}) {
  return React.createElement('nav', {
    ...rest,
    'aria-label': 'مسار التنقل',
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      ...style
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? React.createElement('span', {
    'aria-hidden': 'true',
    style: {
      opacity: .6
    }
  }, separator) : null, it.href && i < items.length - 1 ? React.createElement('a', {
    href: it.href,
    style: {
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, it.label) : React.createElement('span', {
    style: {
      color: i === items.length - 1 ? 'var(--text-body)' : 'inherit',
      fontWeight: i === items.length - 1 ? 'var(--fw-semibold)' : 'inherit'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const active = value ?? (items[0] && items[0].value);
  return React.createElement('div', {
    ...rest,
    role: 'tablist',
    style: {
      display: 'flex',
      gap: variant === 'pill' ? 'var(--sp-2)' : 'var(--sp-7)',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    const common = {
      key: it.value,
      role: 'tab',
      'aria-selected': on,
      onClick: () => onChange && onChange(it.value),
      style: {
        cursor: 'pointer',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-regular)',
        border: 'none',
        background: 'transparent',
        transition: 'var(--motion-hover)'
      }
    };
    if (variant === 'pill') {
      common.style = {
        ...common.style,
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--action-primary)' : 'var(--surface-sunken)',
        color: on ? 'var(--n-0)' : 'var(--text-body)'
      };
    } else {
      common.style = {
        ...common.style,
        padding: '0 0 12px',
        color: on ? 'var(--moe-purple)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -3px 0 0 var(--moe-teal)' : 'none'
      };
    }
    return React.createElement('button', common, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/deck-slides.jsx
try { (() => {
/* MOE deck kit — 1280×720 slide types recreated from
   "قوالب عروض الوزارة بالعربي النسخة المحدثة.pptx".
   Composes the design-system brand primitives; exports to window for the card pages. */
const NS = window.MOEDesignSystem_ddd988;
const {
  TitleBadge,
  DiagChip,
  SectionDivider,
  StatTile,
  NumberedItem,
  Logo,
  Icon,
  Decor
} = NS;
const A = '../assets';
function SlideFrame({
  title,
  footer = 'عنوان العرض',
  page,
  tone = 'canvas',
  children,
  chrome = true,
  logoTone = 'color'
}) {
  const bg = tone === 'canvas' ? 'var(--n-50)' : tone === 'white' ? 'var(--n-0)' : tone === 'ink' ? 'var(--moe-ink)' : 'transparent';
  const fg = tone === 'ink' ? 'var(--n-0)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-core)',
      overflow: 'hidden'
    }
  }, children, chrome && /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/${logoTone === 'white' ? 'moe-logo-white.png' : 'moe-logo-trimmed.png'}`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 34,
      right: 36,
      height: 78
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 54,
      right: 150
    }
  }, /*#__PURE__*/React.createElement(TitleBadge, {
    tone: "purple"
  }, title)), chrome && /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/moe-url-wordmark.png`,
    alt: "www.moe.gov.sa",
    style: {
      position: 'absolute',
      bottom: 22,
      left: 26,
      height: 22
    }
  }), chrome && page && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 54,
      left: 34,
      fontSize: 'var(--fs-slide-footer)',
      color: 'var(--text-muted)'
    }
  }, page), chrome && footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 26,
      right: 68,
      fontSize: 'var(--fs-slide-footer)',
      color: 'var(--text-muted)'
    }
  }, footer));
}
function TitleSlide({
  headline = 'عنوان العرض',
  org = 'اسم الجهة المقدمة',
  date = 'اليوم – الشهر - السنة',
  photo = 'lab-vr-student'
}) {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    chrome: false,
    tone: "white"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/photos/${photo}.jpeg`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: 704,
      height: 720,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 704,
      height: 720,
      background: 'linear-gradient(90deg,rgba(0,32,96,.34) 0%,rgba(0,32,96,.06) 60%,rgba(255,255,255,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 576,
      height: 720,
      background: 'var(--n-0)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 68px 0 44px',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-slide-hero)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.12,
      color: 'var(--moe-violet)'
    }
  }, headline), /*#__PURE__*/React.createElement(DiagChip, {
    tone: "sky"
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-slide-small)',
      color: 'var(--text-muted)'
    }
  }, date)), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/moe-logo-trimmed.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 40,
      right: 68,
      height: 74
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/moe-url-wordmark.png`,
    alt: "www.moe.gov.sa",
    style: {
      position: 'absolute',
      bottom: 30,
      right: 68,
      height: 20
    }
  }), /*#__PURE__*/React.createElement(Decor, {
    kind: "capsulePurple",
    size: 260,
    base: `${A}/patterns`,
    style: {
      position: 'absolute',
      bottom: -110,
      right: 300,
      opacity: .5
    }
  }));
}
function DividerSlide({
  label = 'فاصل',
  page = '٦'
}) {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    label: label
  })), /*#__PURE__*/React.createElement(Decor, {
    kind: "dotGrid",
    size: 120,
    base: `${A}/patterns`,
    style: {
      position: 'absolute',
      bottom: 60,
      right: 68,
      opacity: .5
    }
  }));
}
function AgendaSlide({
  items = ['الإطار العام', 'المنهجية', 'المؤشرات', 'التحديات', 'المبادرات', 'الخطوات القادمة'],
  page = '٥'
}) {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A",
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 190,
      right: 68,
      left: 68,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '26px 40px'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "moe-num",
    style: {
      fontSize: 34,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--moe-sky-bright)',
      minWidth: 56
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--moe-navy)'
    }
  }, t)))));
}
function FourPointSlide({
  page = '١٢'
}) {
  const rows = [{
    i: 'أولاً',
    tone: 'sky',
    icon: 'team-idea',
    t: 'بناء القدرات',
    b: 'برامج تدريبية للمعلمين والقيادات المدرسية.'
  }, {
    i: 'ثانياً',
    tone: 'steel',
    icon: 'strategy-grid',
    t: 'تطوير المناهج',
    b: 'مواءمة المحتوى مع مهارات المستقبل.'
  }, {
    i: 'ثالثاً',
    tone: 'violet',
    icon: 'chart-growth',
    t: 'قياس الأثر',
    b: 'مؤشرات أداء ربعية على مستوى الإدارات.'
  }, {
    i: 'رابعاً',
    tone: 'purple',
    icon: 'meeting-discussion',
    t: 'الشراكات',
    b: 'تكامل مع منظومة التعليم والقطاع الخاص.'
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u064A\u062D\u0629",
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 190,
      right: 68,
      left: 68,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '34px 44px'
    }
  }, rows.map((r, k) => /*#__PURE__*/React.createElement(NumberedItem, {
    key: k,
    tone: r.tone,
    title: r.t,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 40,
      base: `${A}/icons`
    })
  }, r.b))));
}
function StatsSlide({
  page = '٣٤'
}) {
  const groups = [{
    t: 'العنوان ١',
    a: '72%',
    b: '38%'
  }, {
    t: 'العنوان ٢',
    a: '80%',
    b: '20%'
  }, {
    t: 'العنوان ٣',
    a: '50%',
    b: '06%'
  }];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u064A\u062D\u0629",
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 200,
      right: 68,
      left: 68,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--moe-purple)'
    }
  }, g.t), /*#__PURE__*/React.createElement(StatTile, {
    value: g.a,
    label: "\u0627\u0644\u0646\u0633\u0628\u0629",
    caption: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u0645\u0629",
    tone: "purple",
    align: "start"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: g.b,
    label: "\u0627\u0644\u0646\u0633\u0628\u0629",
    caption: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u0645\u0629",
    tone: "sky",
    align: "start"
  })))));
}
function TimelineSlide({
  years = ['٢٠٢٢', '٢٠٢٣', '٢٠٢٤', '٢٠٢٥', '٢٠٢٦'],
  page = '٢٢'
}) {
  const tones = ['var(--moe-sky-bright)', 'var(--moe-steel)', 'var(--moe-teal)', 'var(--moe-violet)', 'var(--moe-purple)'];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u064A\u062D\u0629",
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 300,
      right: 68,
      left: 68,
      height: 4,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 210,
      right: 68,
      left: 68,
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)'
    }
  }, years.map((y, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-slide-body)',
      color: 'var(--text-muted)',
      height: 60
    }
  }, i % 2 === 0 ? 'وصف موجز للمرحلة' : ''), /*#__PURE__*/React.createElement("div", {
    className: "moe-num",
    style: {
      width: 96,
      height: 96,
      borderRadius: 'var(--radius-pill)',
      background: tones[i],
      color: i < 2 ? 'var(--moe-ink)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      fontWeight: 'var(--fw-bold)'
    }
  }, y), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-slide-body)',
      color: 'var(--text-muted)'
    }
  }, i % 2 === 1 ? 'وصف موجز للمرحلة' : '')))));
}
function IconGridSlide({
  page = '٦٠'
}) {
  const names = ['paper-plane', 'team-idea', 'team-energy', 'meeting-discussion', 'chart-growth', 'strategy-grid', 'presentation-chart', 'map-pin', 'calendar', 'stopwatch', 'buildings', 'arrow-curve'];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0623\u064A\u0642\u0648\u0646\u0627\u062A",
    page: page
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 200,
      right: 68,
      left: 68,
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 34,
      justifyItems: 'center'
    }
  }, names.map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 92,
    base: `${A}/icons`
  }))));
}
function PhotoSplitSlide({
  page = '١٦',
  photo = 'students-tablets'
}) {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    title: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u064A\u062D\u0629",
    page: page,
    tone: "white"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/photos/${photo}.jpeg`,
    alt: "",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 520,
      height: 720,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 190,
      right: 68,
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, ['تمكين الطلبة من مهارات البحث العلمي داخل الصف.', 'بيئات تعلّم رقمية آمنة وجاذبة.', 'مسارات تخصصية تبدأ من المرحلة الثانوية.', 'شراكات مع الجامعات ومراكز الابتكار.'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontSize: 'var(--fs-slide-body)',
      lineHeight: 'var(--lh-snug)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--moe-teal)',
      marginTop: 8,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))));
}
function ThanksSlide() {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    chrome: false,
    tone: "canvas"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--fs-slide-thanks)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--moe-ink)'
    }
  }, "\u0634\u0643\u0631\u0627\u064B \u0644\u0643\u0645"), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/moe-logo-trimmed.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 40,
      right: 68,
      height: 74
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logo/moe-url-wordmark.png`,
    alt: "www.moe.gov.sa",
    style: {
      position: 'absolute',
      bottom: 30,
      left: 68,
      height: 20
    }
  }), /*#__PURE__*/React.createElement(Decor, {
    kind: "capsuleGreen",
    size: 300,
    base: `${A}/patterns`,
    style: {
      position: 'absolute',
      bottom: -140,
      left: -60,
      opacity: .55
    }
  }));
}
Object.assign(window, {
  SlideFrame,
  TitleSlide,
  DividerSlide,
  AgendaSlide,
  FourPointSlide,
  StatsSlide,
  TimelineSlide,
  IconGridSlide,
  PhotoSplitSlide,
  ThanksSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/documents.jsx
try { (() => {
/* MOE official documents — recreated from الدعوات.pptx and شهادة شكر / شهادة حضور .pptx.
   Geometry (px) is taken 1:1 from the source files: certificates 1280×720, invitation A4 720×1040. */
const DNS = window.MOEDesignSystem_ddd988 || {};
const {
  TitleBadge,
  Logo,
  Icon,
  Decor
} = DNS;
const AA = '../../assets';
const dots = c => `${AA}/patterns/${c}`;
function DocDecor({
  portrait
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: `${AA}/patterns/capsule-outline-green.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -62,
      right: portrait ? 'auto' : 214,
      left: portrait ? 56 : 'auto',
      width: 190,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${AA}/patterns/capsule-outline-purple.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -60,
      left: portrait ? 'auto' : -40,
      right: portrait ? -40 : 'auto',
      width: 210,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${AA}/patterns/dot-grid-blue.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: portrait ? 190 : 690,
      width: 26,
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${AA}/patterns/dot-grid-blue.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: portrait ? 150 : 1060,
      width: 26,
      opacity: .85
    }
  }));
}
const line = (size, weight, color) => ({
  fontSize: size,
  fontWeight: weight,
  color,
  textAlign: 'center',
  lineHeight: 1.45
});
function Certificate({
  kind = 'thanks',
  name = 'محمد بن .............................................،،،',
  subject = 'اللقاء، الحفل، الورشة، الدورة التدريبية.........',
  dept = 'الإدارة ........................................',
  date = 'يوم 00 يناير 2025',
  signer = 'المدير العام للإدارة ...........................',
  signerName = 'بدر بن .........................'
}) {
  const isThanks = kind === 'thanks';
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      background: 'var(--n-0)',
      fontFamily: 'var(--font-core)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(DocDecor, null), /*#__PURE__*/React.createElement("img", {
    src: `${AA}/logo/moe-logo-trimmed.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 47,
      right: 1280 - 1111 - 106,
      height: 81
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 108,
      left: 480,
      width: 320
    }
  }, /*#__PURE__*/React.createElement(TitleBadge, {
    tone: "purple",
    size: "lg",
    style: {
      width: '100%'
    }
  }, isThanks ? 'شهادة شكر' : 'شهادة حضور')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 204,
      left: 167,
      width: 945
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(16, 700, 'var(--moe-steel)')
  }, "\u0627\u0644\u0645\u0643\u0640\u0631\u0645: ", name)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 251,
      left: 167,
      width: 945
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(16, 700, 'var(--moe-steel)')
  }, isThanks ? 'نشكــــر لكـــم مشاركتكـــم الفاعلة في' : 'نشكــــر لكـــم حضوركـــم المميــــز ومشاركتكـــــم الفاعلة في')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 335,
      left: 214,
      width: 852
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(20, 700, 'var(--moe-purple)')
  }, subject)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 401,
      left: 167,
      width: 945
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(16, 700, 'var(--moe-steel)')
  }, "\u0648\u0627\u0644\u0630\u064A \u0646\u0641\u0630\u062A\u0647 ", dept, " ", date)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 465,
      left: 447,
      width: 387
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(16, 700, 'var(--moe-sky-soft)')
  }, "\u0631\u0627\u062C\u064A\u0646 \u0644\u0643\u0645 \u062F\u0648\u0627\u0645 \u0627\u0644\u062A\u0648\u0641\u064A\u0642 \u060C\u060C\u060C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 583,
      left: 19,
      width: 384
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(16, 700, 'var(--moe-purple)')
  }, signer), /*#__PURE__*/React.createElement("div", {
    style: {
      ...line(14, 400, 'var(--text-body)'),
      marginTop: 6
    }
  }, signerName)));
}
function Invitation({
  guest = 'سعادة وكيل الوزارة  ..............................',
  guestName = 'الدكتور/ .........بن ...........................',
  minister = 'الأستاذ/ يوسف بن عبد الله البنيان',
  event = 'عنوان ....................................',
  venue = ['المســـرح الرئيـــسي', 'ديوان وزارة التعليــم', 'طريــق الملك عبداللّه'],
  from = ' 09:00 صبــاحاً',
  to = '02:00  مســاءً',
  hijri = '30 رجـب 1446',
  greg = '30 ينــايــر 2025 '
}) {
  const cell = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  };
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'relative',
      width: 720,
      height: 1040,
      background: 'var(--n-0)',
      fontFamily: 'var(--font-core)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(DocDecor, {
    portrait: true
  }), /*#__PURE__*/React.createElement("img", {
    src: `${AA}/logo/moe-logo-trimmed.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 68,
      left: 307,
      height: 81
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 190,
      left: 200,
      width: 320
    }
  }, /*#__PURE__*/React.createElement(TitleBadge, {
    tone: "purple",
    size: "lg",
    style: {
      width: '100%'
    }
  }, "\u062F\u0639\u0648\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 283,
      left: 82,
      width: 557
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(20, 700, 'var(--moe-purple)')
  }, guest), /*#__PURE__*/React.createElement("div", {
    style: {
      ...line(16, 400, 'var(--text-body)'),
      marginTop: 14
    }
  }, guestName)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 401,
      left: 82,
      width: 557
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(18, 700, 'var(--moe-purple)')
  }, "\u0628\u062D\u0636\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u0631 \u0645\u0639\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0627\u0644\u064A \u0627\u0644\u0648\u0632\u064A\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0631"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...line(16, 400, 'var(--text-body)'),
      marginTop: 10
    }
  }, minister)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 505,
      left: 82,
      width: 557
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(28, 700, 'var(--moe-ink)')
  }, "\u064A\u0633\u0631\u0646\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0627 \u062F\u0639\u0648\u062A\u0643\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0645 \u0644\u062D\u0636\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u0631"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...line(16, 400, 'var(--moe-steel)'),
      marginTop: 12
    }
  }, event)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 632,
      left: 82,
      width: 557
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line(14, 400, 'var(--moe-sky-soft)')
  }, "\u0646\u0623\u0645\u0644 \u062D\u0636\u0648\u0631\u0643\u0645 \u0641\u064A \u0627\u0644\u0645\u0648\u0639\u062F \u0627\u0644\u0645\u0648\u0636\u062D \u0623\u062F\u0646\u0627\u0647\u060C\u060C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 714,
      left: 82,
      width: 557,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("img", {
    src: `${AA}/icons/calendar.svg`,
    alt: "",
    style: {
      width: 62,
      height: 62
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--moe-violet)'
    }
  }, hijri), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--moe-violet)'
    }
  }, greg))), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("img", {
    src: `${AA}/icons/stopwatch.svg`,
    alt: "",
    style: {
      width: 62,
      height: 62
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gap: '4px 10px',
      alignItems: 'center',
      fontSize: 10.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u0645\u0646"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--moe-violet)'
    }
  }, from), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u0627\u0644\u0649"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--moe-violet)'
    }
  }, to))), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, /*#__PURE__*/React.createElement("img", {
    src: `${AA}/icons/buildings.svg`,
    alt: "",
    style: {
      width: 66,
      height: 66
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--moe-violet)'
    }
  }, venue.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, v))))));
}
Object.assign(window, {
  Certificate,
  Invitation,
  DocDecor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/documents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide/guide-pages.jsx
try { (() => {
/* MOE guide (دليل) template — recreated from قوالب الادلة النسخة المحدثة.pptx.
   A4 portrait, 745×1044 px, five page types. */
const GNS = window.MOEDesignSystem_ddd988 || {};
const {
  TitleBadge,
  DiagChip
} = GNS;
const GA = '../../assets';
const PAGE = {
  position: 'relative',
  width: 745,
  height: 1044,
  background: 'var(--n-0)',
  fontFamily: 'var(--font-core)',
  overflow: 'hidden'
};
const sameSide = '0 999px 999px 0'; /* مستطيل ذو زاويتين مستديرتين في نفس الجانب */

function Classification({
  label = 'FDC-Public'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 12,
      background: 'rgba(255,255,255,.9)',
      fontSize: 7,
      lineHeight: '12px',
      textAlign: 'center',
      color: 'var(--n-500)',
      letterSpacing: '.08em'
    }
  }, label);
}
function PageChrome({
  deck = 'عنوان العرض',
  page
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: `${GA}/logo/moe-logo-trimmed.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 28,
      left: 647,
      height: 51
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40,
      left: 260,
      width: 372,
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, deck), page && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 966,
      left: 40,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, page), /*#__PURE__*/React.createElement("img", {
    src: `${GA}/logo/moe-url-wordmark.png`,
    alt: "www.moe.gov.sa",
    style: {
      position: 'absolute',
      bottom: 26,
      left: 40,
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Classification, null));
}
function GuideCover({
  title = 'عنوان الدليل',
  org = 'اسم الجهة المقدمة',
  date = 'اليوم – الشهر - السنة',
  photo = 'guide-cover'
}) {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: PAGE
  }, /*#__PURE__*/React.createElement("img", {
    src: `${GA}/photos/${photo}.jpeg`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: 745,
      height: 1044,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,32,96,.55) 0%,rgba(0,56,69,.30) 45%,rgba(0,56,69,.72) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${GA}/logo/moe-logo-white.png`,
    alt: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645",
    style: {
      position: 'absolute',
      top: 74,
      left: 296,
      height: 88
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 338,
      left: 124,
      width: 498,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--n-0)',
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 425,
      left: 203,
      width: 340,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DiagChip, {
    tone: "sky",
    style: {
      width: '100%'
    }
  }, org)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 909,
      left: 203,
      width: 340,
      textAlign: 'center',
      fontSize: 16,
      color: 'var(--n-0)',
      opacity: .9
    }
  }, date), /*#__PURE__*/React.createElement("img", {
    src: `${GA}/logo/moe-url-wordmark.png`,
    alt: "www.moe.gov.sa",
    style: {
      position: 'absolute',
      bottom: 28,
      left: 40,
      height: 16,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement(Classification, null));
}
function GuideContents({
  items = ['الإطار العام للدليل', 'المفاهيم والمصطلحات', 'الأدوار والمسؤوليات', 'إجراءات التنفيذ', 'المؤشرات والتقارير', 'الملاحق'],
  page = '٣'
}) {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageChrome, {
    page: page
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 159,
      left: 426,
      width: 320
    }
  }, /*#__PURE__*/React.createElement(TitleBadge, {
    tone: "purple",
    style: {
      width: '100%'
    }
  }, "\u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A")), items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: 293 + i * 68,
      left: 213,
      width: 471,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 46,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 20,
      background: 'var(--n-50)',
      borderRadius: sameSide,
      fontSize: 16,
      color: 'var(--n-600)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "moe-num",
    style: {
      width: 34,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--moe-sky-bright)'
    }
  }, i + 1))));
}
function GuideSection({
  heading = 'العنوان',
  body,
  page = '٤'
}) {
  const text = body || 'يوضح هذا القسم النطاق والغرض من الدليل، والجهات المشمولة بتطبيقه، والمرجعيات النظامية التي استند إليها. يُحدَّث الدليل دورياً بما يتوافق مع أنظمة الوزارة ولوائحها.';
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageChrome, {
    page: page
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 214,
      left: 88,
      width: 570,
      minHeight: 38,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 22,
      background: 'var(--moe-purple)',
      color: 'var(--n-0)',
      borderRadius: sameSide,
      fontSize: 16,
      fontWeight: 'var(--fw-bold)'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 267,
      left: 88,
      width: 570,
      fontSize: 14,
      lineHeight: 1.9,
      color: 'var(--text-body)'
    }
  }, text));
}
function GuideSubjects({
  blocks,
  page = '٥'
}) {
  const list = blocks || [{
    t: 'الموضوع',
    s: 'العنوان الفرعي:',
    b: 'شرح تفصيلي للإجراء، يتضمن المدخلات والمخرجات والمسؤول عن التنفيذ والمدة الزمنية المتوقعة لكل خطوة.'
  }, {
    t: 'الموضوع',
    s: 'العنوان الفرعي:',
    b: 'الضوابط والاستثناءات، والنماذج المرتبطة بالإجراء، وطريقة التوثيق والأرشفة داخل الأنظمة المعتمدة.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageChrome, {
    page: page
  }), list.map((x, i) => {
    const top = i === 0 ? 202 : 467;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top,
        left: 0,
        width: 745,
        height: 182,
        background: 'var(--n-50)',
        borderRadius: sameSide
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: top - 56,
        left: 488,
        width: 258,
        height: 37,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--moe-steel-deep)',
        color: 'var(--n-0)',
        borderRadius: 'var(--radius-badge-rtl)',
        fontSize: 15,
        fontWeight: 'var(--fw-bold)'
      }
    }, x.t), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: top + 22,
        left: 40,
        width: 678,
        fontSize: 12.5,
        lineHeight: 1.9,
        color: 'var(--moe-steel-deep)'
      }
    }, /*#__PURE__*/React.createElement("b", null, x.s), " ", x.b));
  }));
}
function GuideThanks() {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: PAGE
  }, /*#__PURE__*/React.createElement(PageChrome, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--moe-ink)'
    }
  }, "\u0634\u0643\u0631\u0627\u064B \u0644\u0643\u0645"), /*#__PURE__*/React.createElement("img", {
    src: `${GA}/patterns/capsule-outline-green.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -90,
      right: -50,
      width: 240,
      opacity: .6
    }
  }));
}
Object.assign(window, {
  GuideCover,
  GuideContents,
  GuideSection,
  GuideSubjects,
  GuideThanks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide/guide-pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Decor = __ds_scope.Decor;

__ds_ns.DiagChip = __ds_scope.DiagChip;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NumberedItem = __ds_scope.NumberedItem;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TitleBadge = __ds_scope.TitleBadge;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
