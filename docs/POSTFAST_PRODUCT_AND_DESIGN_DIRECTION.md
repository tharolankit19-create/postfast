# PostFast — Product & Design Direction

## Goal
Turn this repository into an affordable, AI-first Postiz alternative. Retain the existing scheduling, provider, calendar, backend, orchestrator and integration foundations where license obligations permit. Improve the product experience rather than recreating the entire platform from scratch.

## License gate
This repository identifies itself as AGPL-3.0. Commercial use is possible, but distribution and network-use obligations can require corresponding source availability for modified versions. Before selling a derivative or hosted version, preserve license notices and obtain legal review. Do not represent the project as proprietary closed-source without resolving the AGPL obligations.

## Visual system: “quiet Mac utility”
- Surfaces: white / very light neutral in light mode; charcoal / near-black in dark mode.
- One accent: restrained violet (#6D4AFF light, #8B75FF dark).
- Typography: use the existing font stack initially; prioritize clear hierarchy and readable sizes over decorative display type.
- Borders: subtle neutral 1px lines; avoid excessive card-on-card nesting.
- Shadows: only for floating menus/dialogs, low-opacity and short.
- No gradient blobs, neon glows, random emoji icons, glassmorphism, giant rounded pills, fake terminal panels or decorative animations.
- Icons should be consistent line icons; use product/channel marks only where they help recognition.
- Dense workflows should favor whitespace, alignment and strong content hierarchy over oversized hero cards.
- Dark and light themes must share semantic tokens, with accessible contrast.

## Product UX principles
1. Keep core navigation stable: Calendar, Posts, Channels, Media, Analytics, AI Studio, Settings.
2. Primary action is “Create post”; avoid competing CTAs on the same screen.
3. Composer should support one source draft and platform-specific variants, with visible per-channel validation.
4. Calendar states must distinguish draft, queued, scheduled, published and failed.
5. AI is a workflow helper, not decoration: show prompt/context, selected provider, result variants and edit controls.
6. Surface integration failures and next steps in plain language; do not silently lose scheduled posts.
7. Keep empty states actionable and honest; no fabricated analytics or demo metrics presented as real.
8. Respect existing provider architecture. Platform-specific behavior belongs in provider implementations, not generic scheduling code.
9. Add confirmation for consequential actions; never introduce scripted website automation as a substitute for platform-authorized integrations.
10. Keep keyboard access, focus states and reduced-motion preferences.

## Homepage implementation
- Public root route: `apps/frontend/src/app/(app)/page.tsx`.
- Responsive styling and dashboard preview: `apps/frontend/src/app/(app)/home.module.scss`.
- Conversion narrative: founder pain → connected workflow → feature benefits → autonomy controls → signup CTA.
- Interactive workflow tabs and light/dark dashboard preview switch are included; all metrics shown are product UI examples, not customer claims.
- No fabricated customer logos, testimonials, user counts, revenue results, or pricing tiers are presented as facts.
- CTA points to the existing `/auth` registration route; no new billing or AI backend behavior is claimed by the marketing page.

## Implementation plan
### Phase 1 — design foundation
- Add semantic light/dark tokens without deleting legacy provider-specific styles.
- Review navigation, calendar, composer and settings screens against the design principles.
- Remove visual inconsistency incrementally; avoid broad risky rewrites of the monorepo.

### Phase 2 — first end-to-end workflow
- Create/adapt post.
- Select channels and edit platform variants.
- Schedule through existing provider integrations.
- Show queued/success/failure states.
- Validate through existing backend and orchestrator contracts.

### Phase 3 — AI and agent workflow
- Reuse existing AI/MCP foundations only after mapping the current implementation.
- Add BYO AI provider setup with encrypted secret handling.
- Add draft/adaptation tools first; require approval for publishing actions.

### Phase 4 — commercial readiness
- Test billing/entitlement behavior in a separate branch/environment.
- Verify export/delete, privacy, error recovery, accessibility and platform policies.
- Confirm AGPL compliance and third-party license notices before launch.

## QA checklist for design changes
1. [ ] Open the frontend in light mode; verify readable text, white surfaces and violet primary actions.
2. [ ] Switch to dark mode; verify the same hierarchy and contrast without white flash or unreadable inputs.
3. [ ] Open calendar, composer, channel settings and modals; confirm legacy provider previews still render.
4. [ ] Navigate with keyboard and verify visible focus and reduced-motion behavior.
5. [ ] Run root lint/build scripts and resolve any regression before merging.
