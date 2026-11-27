import React from 'react';
import { approach, areas, companies, governance, phases, principles } from './content.js';
import { Eyebrow, Icon, Intro } from './components.jsx';

export function About() {
  return <><Intro section="About" title="About SteelSafe">SteelSafe is a labour safety and welfare initiative for four participating iron and steel companies. It brings workers and site teams into the same conversation about safer, healthier workplaces.</Intro>
    <section className="section shell split"><div><Eyebrow>Our vision</Eyebrow><h2>A workplace where every worker returns home safe, healthy and respected.</h2><img className="vision-photo" src="/images/reinforcement-work.webp" alt="Workers positioning steel reinforcement bars on a construction deck" width="600" height="337" loading="lazy"/></div>
      <div><h3>Our mission</h3><p>To encourage a consistent and accountable culture of occupational safety and worker welfare across the participating companies through awareness, prevention, support and continuous improvement.</p>
      <h3>Our objectives</h3><p>Prevent injuries, reduce exposure to hazards and improve welfare facilities. Help workers understand their rights and responsibilities, raise concerns without fear of blame, and take part in decisions that affect their work.</p></div></section>
    <section className="section tinted"><div className="shell"><Eyebrow>Guiding principles</Eyebrow><h2>What guides the work</h2>
      <div className="principle-grid">{principles.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div>
    </div></section></>;
}

export function Initiatives() {
  return <><Intro section="Initiatives" title="Our initiatives">Three connected areas guide the proposed programme. Each site can adapt the activities to its workforce, facilities and risks.</Intro>
    <nav className="jump-nav shell" aria-label="Focus areas">{areas.map(a => <a key={a.id} href={'#' + a.id}><Icon name={a.icon}/>{a.short}</a>)}</nav>
    <div className="shell">{areas.map(a => <article className="initiative-detail" key={a.id} id={a.id}>
      <img className="detail-photo" src={'/images/' + a.id + '.webp'} width={a.width} height={a.height} alt={a.alt} loading="lazy"/>
      <div><Eyebrow>Focus area</Eyebrow><h2>{a.title}</h2><p>{a.objective}</p><h3>Proposed activities</h3><ul className="activity-list">{a.activities.map(item => <li key={item}>{item}</li>)}</ul></div>
    </article>)}</div></>;
}

const monitoring = [
  ['Risk prevention', 'Completion of inspections and risk assessments, suitability and use of PPE, and closure of corrective actions.'],
  ['Training and reporting', 'Induction and refresher coverage, worker participation, near-miss reporting and incident follow-up.'],
  ['Health and welfare', 'Workplace injuries and lost workdays, access to drinking water, sanitation, rest areas and first aid.'],
  ['Worker voice', 'Feedback received, grievances raised and time taken to resolve concerns.']
];

function Rows({ items }) {
  return <dl className="rows">{items.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>;
}

export function Framework() {
  return <><Intro section="Framework" title="Programme framework">A proposed approach for turning site observations and worker feedback into practical improvements. Each participating company can adapt the framework to local conditions.</Intro>
    <div className="shell framework-layout">
      <nav className="section-index" aria-label="Framework sections"><strong>On this page</strong>{[['approach','Implementation approach'],['phases','Programme roadmap'],['governance','Proposed governance'],['monitoring','Monitoring and review']].map(([id,label]) => <a href={'#'+id} key={id}>{label}</a>)}</nav>
      <div className="framework-content">
        <section id="approach"><Eyebrow>Implementation</Eyebrow><h2>Five working activities</h2><ol className="steps">{approach.map(([name, text]) => <li key={name}><h3>{name}</h3><p>{text}</p></li>)}</ol></section>
        <section id="phases"><Eyebrow>Proposed roadmap</Eyebrow><h2>Four programme phases</h2>
          <div className="disclosures">{phases.map(([name, text, output], i) => <details key={name} open={i === 0}><summary><small>Phase {i + 1}</small>{name}<Icon name="plus"/></summary><div><p>{text}</p><p><strong>Expected output</strong><br/>{output}</p></div></details>)}</div>
        </section>
        <section id="governance"><Eyebrow>Responsibilities</Eyebrow><h2>Proposed governance</h2><p>The roles below are proposed. Responsibilities, reporting lines and meeting schedules still need agreement from the participating companies.</p><Rows items={governance}/></section>
        <section id="monitoring"><Eyebrow>Continuous improvement</Eyebrow><h2>Monitoring and review</h2><p>Sites may use these indicators to review progress, check completed actions and decide what to improve next.</p><Rows items={monitoring}/></section>
      </div>
    </div></>;
}

export function Companies() {
  return <><Intro section="Companies" title="Participating companies">Four companies participate in SteelSafe. The initiative offers a common approach to labour safety and welfare while recognising the different needs of each workplace.</Intro>
    <section className="shell section company-page"><ul>{companies.map(company => <li key={company}><span className="company-icon"><Icon name="factory" size={30}/></span><h2>{company}</h2></li>)}</ul>
      <div className="related"><div><h3>A shared programme framework</h3><p>See how site teams could identify risks, set priorities and review progress.</p></div><a className="button navy" href="/framework/">Explore the framework</a></div>
    </section></>;
}

export function Contact() {
  return <><Intro section="Contact" title="Contact SteelSafe">For enquiries about the labour safety and welfare initiative and its proposed programme.</Intro>
    <section className="section shell split contact-section"><div><Eyebrow>Enquiries</Eyebrow><h2>Contact information</h2><address className="contact-details"><div><span>Email</span><a className="text-link" href="mailto:steelsafe03@gmail.com">steelsafe03@gmail.com</a></div><div><span>Phone</span><a className="text-link" href="tel:+917400796396">+91 74007 96396</a></div></address></div>
    <div className="contact-panel"><Icon name="people" size={32}/><h3>For workers and contractors</h3><p>For a concern at your workplace, use your site’s existing reporting channel or speak with your supervisor or worker representative.</p><a className="text-link" href="/companies/">View participating companies</a></div></section></>;
}
