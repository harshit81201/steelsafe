import React from 'react';
import { areas, companies } from './content.js';
import { Eyebrow, Icon, Roadmap } from './components.jsx';

function Hero() {
  return <>
    <section className="hero">
      <picture><source media="(max-width: 660px)" srcSet="/images/steelworks-mobile.webp"/><img className="hero-image" src="/images/steelworks.webp" alt="Illustrative view of a hard-hatted worker overlooking a steel rolling mill" fetchPriority="high" width="1983" height="793"/></picture>
      <div className="shell hero-content">
        <Eyebrow>Labour safety &amp; welfare initiative</Eyebrow>
        <h1>Safer workplaces.<br/><em>Stronger people.</em></h1>
        <p className="hero-copy">A coordinated commitment to safer work, healthier lives and dignity for every worker.</p>
        <div className="actions"><a className="button orange" href="/initiatives/"><Icon name="helmet"/>Explore initiatives</a><a className="button translucent" href="/framework/"><Icon name="layers"/>Our framework</a></div>
      </div>
    </section>
    <div className="overview-strip"><div className="shell overview-inner">
      {[['factory', 4, 'Participating companies', '/companies/'], ['helmet', 3, 'Core focus areas', '#focus'], ['route', 4, 'Programme phases', '#roadmap']].map(([icon, count, label, href]) => <a href={href} key={label}><Icon name={icon} size={29}/><strong>{count}</strong><span>{label}</span></a>)}
    </div></div>
  </>;
}

export default function Home() {
  return <><Hero/>
    <section className="section focus-section shell" id="focus">
      <Eyebrow>Our initiatives</Eyebrow>
      <div className="section-heading"><h2>Where we focus</h2><a className="text-link" href="/initiatives/"><Icon name="grid" size={16}/>View all initiatives</a></div>
      <div className="focus-grid">{areas.map(area => <a className="focus-card" href={'/initiatives/#' + area.id} key={area.id}>
        <div className="card-photo"><img src={'/images/' + area.id + '.webp'} alt={area.alt} width="720" height="724" loading="lazy"/><span className="icon-tile"><Icon name={area.icon} size={24}/></span></div>
        <div className="card-content"><h3>{area.short}</h3><p>{area.summary}</p></div>
      </a>)}</div>
    </section>
    <section className="about-band section"><div className="shell split">
      <div><Eyebrow>About SteelSafe</Eyebrow><h2>A shared commitment<br/>on the shop floor.</h2></div>
      <div><p>SteelSafe brings four iron and steel companies together around worker safety, health and dignity. Its mission is to make prevention and worker welfare part of everyday decisions at each site.</p><a className="text-link" href="/about/">Our purpose and principles</a></div>
    </div></section>
    <Roadmap/>
    <section className="section partners shell"><Eyebrow>Participating companies</Eyebrow><div className="section-heading"><h2>Working together</h2><a href="/companies/" className="text-link">About the companies</a></div>
      <ul className="company-strip">{companies.map(company => <li key={company}>{company}</li>)}</ul>
    </section>
    <aside className="vision"><div className="shell"><Eyebrow>Our vision</Eyebrow><blockquote>“A workplace where every worker returns home safe, healthy and respected.”</blockquote></div></aside>
  </>;
}
