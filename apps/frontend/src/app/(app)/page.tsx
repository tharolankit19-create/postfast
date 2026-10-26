import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'KryxAI — AI marketing workspace for founders',
  description:
    'Turn product context into a focused marketing plan, on-brand content and a publishing workflow. Built for indie founders and lean SaaS teams.',
  openGraph: {
    title: 'KryxAI — Stop guessing what to post',
    description:
      'A connected AI marketing workflow from strategy to drafts, review and scheduling.',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
