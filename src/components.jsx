import React, { useEffect, useRef, useState } from 'react';
import { pages, phases } from './content.js';

const icons = {
  helmet: <><path d="M4.5 16v-2a7.5 7.5 0 0 1 5-7M14.5 7a7.5 7.5 0 0 1 5 7v2M10 11V5h4v6M3 16h18v3H3z"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5"/></>,
  book: <><path d="M3 4.8c3.4-1 5.8-.5 9 1.2 3.2-1.7 5.6-2.2 9-1.2v14c-3.3-.8-5.6-.4-9 1.2-3.4-1.6-5.7-2-9-1.2zM12 6v14"/></>,
  factory: <><path d="M3 20V9l6 3V8l6 3 1-7h4l1 16zM6 16h1m4 0h1m4 0h1"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
  route: <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h9a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h9"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  plus: <path d="M5 12h14m-7-7v14"/>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>
};

export function Icon({ name, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

export function Header({ path }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header">
    <a className="skip" href="#main">Skip to content</a>
    <div className="shell header-row">
      <a className="brand" href="/" aria-label="SteelSafe home"><img src="/steelsafe-logo.svg" width="208" height="60" alt="SteelSafe"/></a>
      <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/> {open ? 'Close' : 'Menu'}</button>
      <nav id="navigation" className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Main navigation">
        {Object.entries(pages).map(([url, [label]]) => <a key={url} href={url} aria-current={path === url ? 'page' : undefined} className={url === '/contact/' ? 'contact-link' : ''}>{url === '/contact/' && <Icon name="mail" size={16}/>} {url === '/contact/' ? 'Contact us' : label}</a>)}
      </nav>
    </div>
  </header>;
}

export function Footer() {
  return <footer><div className="shell">
    <div className="footer-main"><div><strong className="footer-brand">Steel<span>Safe</span></strong><p>Labour Safety &amp; Welfare Initiative</p></div>
      <nav aria-label="Footer navigation">{Object.entries(pages).map(([url, [label]]) => <a href={url} key={url}>{label}</a>)}</nav>
    </div>
    <div className="footer-note"><span>Work Safe. Build Stronger.</span><span>Industrial imagery is illustrative.</span></div>
  </div></footer>;
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function Intro({ section, title, children }) {
  return <section className="intro"><div className="shell">
    <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>{section}</span></nav>
    <h1>{title}</h1><p className="intro-copy">{children}</p>
  </div></section>;
}

export function Roadmap() {
  const [selected, setSelected] = useState(0);
  const [name, description, output] = phases[selected];
  return <section className="roadmap section" id="roadmap"><div className="shell">
    <Eyebrow>Programme framework</Eyebrow>
    <div className="section-heading"><h2>The proposed roadmap</h2><a className="text-link" href="/framework/">Full framework</a></div>
    <div className="phase-list" role="group" aria-label="Choose a programme phase">
      {phases.map(([phase], i) => <button key={phase} aria-pressed={selected === i} aria-controls="phase-detail" onClick={() => setSelected(i)}><small>Phase {i + 1}</small>{phase}</button>)}
    </div>
    <div className="phase-detail" id="phase-detail" aria-live="polite"><div><h3>{name}</h3><p>{description}</p></div><div><strong>Expected output</strong><p>{output}</p></div></div>
  </div></section>;
}
