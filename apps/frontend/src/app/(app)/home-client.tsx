"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './home.module.scss';

const workflowTabs = [
  {
    id: 'strategy',
    number: '01',
    label: 'Find your angle',
    title: 'Know what to say before you post.',
    body: 'Turn your product, audience and goals into a focused weekly marketing plan. No blank-page panic. No random posting.',
    items: ['Positioning and audience', 'Weekly campaign themes', 'Clear content pillars'],
  },
  {
    id: 'create',
    number: '02',
    label: 'Create in your voice',
    title: 'Useful content. Still sounds like you.',
    body: 'Build posts from your own product context, customer language and point of view. Refine every draft before it goes live.',
    items: ['Voice-aware drafts', 'Platform-specific versions', 'Hooks, CTAs and variations'],
  },
  {
    id: 'distribute',
    number: '03',
    label: 'Publish consistently',
    title: 'One queue. Every channel in sync.',
    body: 'Plan the week, preview each channel and schedule approved posts from one calm workspace.',
    items: ['Visual content calendar', 'Channel-ready previews', 'Approval before publishing'],
  },
  {
    id: 'learn',
    number: '04',
    label: 'Learn what works',
    title: 'Make the next campaign smarter.',
    body: 'Bring performance back into the workflow so the next batch builds on evidence, not guesses.',
    items: ['Post and channel insights', 'Repeatable winning formats', 'Next-step recommendations'],
  },
];

const features = [
  { number: '01', title: 'A strategy that ships', text: 'Turn your positioning, launch goals and customer pain into a clear weekly plan—not another 40-page strategy deck.' },
  { number: '02', title: 'Your voice, at scale', text: 'Give AI your product context and writing examples. Get editable drafts that start closer to your voice.' },
  { number: '03', title: 'A real publishing workflow', text: 'Draft, adapt, review, schedule and track content without bouncing between disconnected tools.' },
  { number: '04', title: 'Human approval where it matters', text: 'Automate repetitive, low-risk work. Keep the final say on brand-sensitive content and publishing.' },
  { number: '05', title: 'One place to see the work', text: 'Keep campaigns, drafts, channels and outcomes connected so marketing does not live in scattered tabs.' },
  { number: '06', title: 'Built for small teams', text: 'Skip enterprise complexity. Start with a founder-led workflow and add structure as the business grows.' },
];

function Arrow({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.2 10h11.2M10.1 4.7l5.3 5.3-5.3 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m4 9.2 3.1 3.1L14 5.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('strategy');
  const [darkPreview, setDarkPreview] = useState(false);
  const activeWorkflow = workflowTabs.find((tab) => tab.id === activeTab) || workflowTabs[0];

  return (
    <main className={styles.page}>
      <div className={styles.announcement}>
        <span className={styles.announcementDot} />
        The AI marketing workspace for lean teams
        <a href="#workflow">See how it works <Arrow /></a>
      </div>

      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="KryxAI home">
          <span className={styles.brandMark}><span /><span /><span /></span>
          <span>Kryx<span className={styles.brandAccent}>AI</span></span>
        </Link>
        <nav className={styles.navLinks} aria-label="Main navigation">
          <a href="#workflow">How it works</a>
          <a href="#features">Features</a>
          <a href="#autonomy">AI control</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className={styles.navActions}>
          <Link className={styles.loginLink} href="/auth/login">Log in</Link>
          <Link className={styles.navCta} href="/auth">Get started <Arrow /></Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span className={styles.eyebrowIcon}>✳</span> YOUR AI MARKETING TEAM</div>
          <h1>Stop guessing what to post. <span>Start marketing with a plan.</span></h1>
          <p className={styles.heroText}>KryxAI helps indie founders turn product context into a clear strategy, on-brand content and a publishing workflow—without hiring a full marketing team.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/auth">Build your marketing workflow <Arrow /></Link>
            <a className={styles.secondaryButton} href="#workflow"><span className={styles.playIcon}>▶</span> Explore the workflow</a>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.avatarStack}><span>A</span><span>F</span><span>S</span></div>
            <div><strong>Made for founder-led marketing</strong><small>Less tab switching. More consistent execution.</small></div>
          </div>
          <div className={styles.heroFootnote}><span className={styles.greenDot} /> You stay in control. AI does the busywork.</div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualGlow} />
          <div className={styles.appWindow}>
            <div className={styles.windowTop}>
              <div className={styles.windowDots}><i /><i /><i /></div>
              <span>kryx.ai / workspace</span>
              <button className={styles.modeSwitch} onClick={() => setDarkPreview(!darkPreview)} aria-label="Toggle dashboard preview theme">{darkPreview ? '☼' : '◐'}</button>
            </div>
            <div className={darkPreview ? styles.dashboardDark : styles.dashboard}>
              <aside className={styles.dashSidebar}>
                <div className={styles.miniBrand}><span className={styles.miniBrandMark}>✳</span> KryxAI</div>
                <div className={styles.workspaceLabel}>WORKSPACE</div>
                <div className={styles.sideItemActive}><span>◫</span> Overview</div>
                <div className={styles.sideItem}><span>⌘</span> Strategy</div>
                <div className={styles.sideItem}><span>✎</span> Content studio</div>
                <div className={styles.sideItem}><span>▦</span> Calendar</div>
                <div className={styles.sideItem}><span>↗</span> Insights</div>
                <div className={styles.sideBottom}><span className={styles.sideAvatar}>AK</span><span><b>Founder workspace</b><small>Free plan preview</small></span></div>
              </aside>
              <div className={styles.dashMain}>
                <div className={styles.dashHeading}><div><small>MONDAY, OCTOBER 26</small><h3>Good morning, founder <span>✳</span></h3><p>Here’s your marketing focus for this week.</p></div><button className={styles.createButton}>＋ New content</button></div>
                <div className={styles.focusCard}>
                  <div className={styles.focusTop}><span className={styles.focusIcon}>✳</span><span className={styles.focusLabel}>THIS WEEK'S FOCUS</span><span className={styles.focusStatus}>Ready to review</span></div>
                  <h4>Show the problem. Then show the product.</h4>
                  <p>Build trust with 3 practical posts that teach your audience something useful before asking for a click.</p>
                  <div className={styles.focusTags}><span>3 content angles</span><span>5 draft ideas</span><span>2 channels</span></div>
                </div>
                <div className={styles.dashSectionTitle}><b>Your content pipeline</b><a href="#workflow">View workflow <Arrow /></a></div>
                <div className={styles.pipeline}>
                  <div><span className={styles.pipelineCount}>03</span><small>Ideas</small><i className={styles.pipelineLineOne} /></div>
                  <div><span className={styles.pipelineCount}>05</span><small>Drafts</small><i className={styles.pipelineLineTwo} /></div>
                  <div><span className={styles.pipelineCount}>02</span><small>In review</small><i className={styles.pipelineLineThree} /></div>
                  <div><span className={styles.pipelineCount}>04</span><small>Scheduled</small><i className={styles.pipelineLineFour} /></div>
                </div>
                <div className={styles.draftPreview}>
                  <div className={styles.draftHeader}><span className={styles.socialMark}>𝕏</span><span><b>Founder insight</b><small>Draft · LinkedIn version ready</small></span><span className={styles.draftMore}>···</span></div>
                  <p>Most founders don't have a content problem. They have a <b>clear point of view</b> problem.</p>
                  <div className={styles.draftFooter}><span>AI-assisted · Your voice profile</span><button>Edit draft ↗</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.floatNote}><span className={styles.floatCheck}><Check /></span><span><b>Plan connected to execution</b><small>Strategy → Draft → Review → Schedule</small></span></div>
          <div className={styles.visualCaption}>A clearer way to go from “what should I post?” to “it’s already planned.”</div>
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="Product principles">
        <span>ONE CONNECTED WORKFLOW</span><i /><span>YOUR BRAND VOICE</span><i /><span>HUMAN-APPROVED PUBLISHING</span><i /><span>BUILT FOR INDIE FOUNDERS</span>
      </section>

      <section className={styles.workflowSection} id="workflow">
        <div className={styles.sectionIntro}>
          <div className={styles.eyebrow}>FROM STRATEGY TO SHIPPING</div>
          <h2>Marketing shouldn’t feel like <span>fourteen open tabs.</span></h2>
          <p>One connected workflow takes you from figuring out what matters to publishing content you’re proud to put your name on.</p>
        </div>
        <div className={styles.workflowGrid}>
          <div className={styles.workflowNav}>
            {workflowTabs.map((tab) => (
              <button key={tab.id} className={activeTab === tab.id ? styles.workflowTabActive : styles.workflowTab} onClick={() => setActiveTab(tab.id)}>
                <span>{tab.number}</span><b>{tab.label}</b><Arrow />
              </button>
            ))}
            <div className={styles.workflowNote}><span>✳</span><p>AI handles the repetitive work. <b>You make the important calls.</b></p></div>
          </div>
          <div className={styles.workflowDetail}>
            <div className={styles.workflowDetailTop}><span>{activeWorkflow.number} / WORKFLOW</span><span className={styles.liveBadge}><i /> Connected process</span></div>
            <h3>{activeWorkflow.title}</h3>
            <p>{activeWorkflow.body}</p>
            <ul>{activeWorkflow.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            <div className={styles.workflowMiniUI}>
              <div className={styles.miniUITop}><span>{activeWorkflow.label}</span><span>Draft workspace <b>↗</b></span></div>
              <div className={styles.miniUIContent}>
                <div className={styles.miniUIPulse}><span>✳</span></div>
                <div><b>{activeWorkflow.id === 'strategy' ? 'Your next best move' : activeWorkflow.id === 'create' ? 'Draft in your voice' : activeWorkflow.id === 'distribute' ? 'Ready for your review' : 'Learn and improve'}</b><p>{activeWorkflow.id === 'strategy' ? 'Teach one useful lesson. Show the product. Invite a reply.' : activeWorkflow.id === 'create' ? 'Clear hook · useful insight · natural CTA' : activeWorkflow.id === 'distribute' ? 'LinkedIn · X · Scheduled after approval' : 'Compare outcomes and carry the strongest angle forward.'}</p></div>
                <span className={styles.miniUIArrow}><Arrow /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection} id="features">
        <div className={styles.featuresHeading}>
          <div><div className={styles.eyebrow}>LESS BUSYWORK. MORE MOMENTUM.</div><h2>The useful parts of a marketing team.<br /><span>Without the busywork.</span></h2></div>
          <p>Not another AI text box. A place to plan, create, publish and learn—with the context carried through each step.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => <article className={styles.featureCard} key={feature.number}><span className={styles.featureNumber}>{feature.number}</span><div className={styles.featureGlyph}>{feature.number === '01' ? '↗' : feature.number === '02' ? '✳' : feature.number === '03' ? '▦' : feature.number === '04' ? '✓' : feature.number === '05' ? '⌘' : '◌'}</div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#workflow">Explore workflow <Arrow /></a></article>)}
        </div>
      </section>

      <section className={styles.autonomySection} id="autonomy">
        <div className={styles.autonomyCopy}>
          <div className={styles.eyebrow}>AUTONOMY WITH GUARDRAILS</div>
          <h2>Let AI move fast.<br /><span>Keep your hand on the wheel.</span></h2>
          <p>Marketing needs speed, but your brand is not a sandbox. Set the boundaries once and let the system handle the repeatable work.</p>
          <div className={styles.autonomyList}>
            <div><span className={styles.autonomyIcon}>↻</span><span><b>Automate low-risk tasks</b><small>Repurpose drafts, organize ideas and prepare a schedule.</small></span><span className={styles.autoPill}>AUTO</span></div>
            <div><span className={styles.autonomyIcon}>✓</span><span><b>Approve important decisions</b><small>Review brand-sensitive copy and publishing actions.</small></span><span className={styles.reviewPill}>REVIEW</span></div>
            <div><span className={styles.autonomyIcon}>◷</span><span><b>See what happened</b><small>Keep actions and outcomes visible to your team.</small></span><span className={styles.auditPill}>TRACEABLE</span></div>
          </div>
        </div>
        <div className={styles.controlPanel}>
          <div className={styles.controlPanelTop}><span className={styles.panelIcon}>✳</span><span><b>Autonomy settings</b><small>Founder workspace</small></span><span className={styles.panelStatus}><i /> Active</span></div>
          <div className={styles.controlRow}><span><b>Suggest content ideas</b><small>Use product and audience context</small></span><span className={styles.toggleOn}><i /></span></div>
          <div className={styles.controlRow}><span><b>Prepare channel variants</b><small>Adapt length, format and CTA</small></span><span className={styles.toggleOn}><i /></span></div>
          <div className={styles.controlRow}><span><b>Publish without approval</b><small>Keep publishing under your control</small></span><span className={styles.toggleOff}><i /></span></div>
          <div className={styles.approvalCallout}><span><Check /></span><p><b>Approval required</b><small>Nothing goes live from this preview without your sign-off.</small></p></div>
          <div className={styles.panelFooter}><span>Changes saved to workspace</span><span>Updated just now</span></div>
        </div>
      </section>

      <section className={styles.ctaSection} id="pricing">
        <div className={styles.ctaOrb} />
        <div className={styles.ctaContent}>
          <div className={styles.eyebrow}>YOUR NEXT MARKETING WEEK STARTS HERE</div>
          <h2>Build a system.<br /><span>Not another to-do list.</span></h2>
          <p>Bring your product context. Leave with a clearer way to plan and ship your marketing.</p>
          <div className={styles.ctaActions}><Link className={styles.primaryButton} href="/auth">Start your workspace <Arrow /></Link><a href="#workflow" className={styles.ctaSecondary}>Explore the workflow</a></div>
          <small className={styles.ctaFineprint}>Start with the workflow. Connect your channels as you’re ready.</small>
        </div>
        <div className={styles.ctaSideCard}><span className={styles.ctaCardIcon}>✳</span><small>YOUR WEEK, WITH A PLAN</small><div className={styles.ctaTask}><span><Check /></span><div><b>Strategy is clear</b><small>Audience · angle · objective</small></div></div><div className={styles.ctaTask}><span><Check /></span><div><b>Drafts are ready to review</b><small>On-brand · editable · channel-aware</small></div></div><div className={styles.ctaTask}><span className={styles.pendingCheck}>◷</span><div><b>Publishing is under control</b><small>Schedule after approval</small></div></div></div>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.brand}><span className={styles.brandMark}><span /><span /><span /></span><span>Kryx<span className={styles.brandAccent}>AI</span></span></Link>
        <span>Marketing execution, with a little more clarity.</span>
        <div><a href="#workflow">How it works</a><a href="#features">Features</a><Link href="/auth">Get started</Link></div>
        <small>© {new Date().getFullYear()} KryxAI. Built for people building things.</small>
      </footer>
    </main>
  );
}
