import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Builder",
  description: "Design your custom dashboard layout with our intuitive drag-and-drop builder. Configure panels, set grid positions, and preview in real-time.",
  openGraph: {
    title: "Dashboard Builder - Config-Driven UI Platform",
    description: "Create custom layouts with drag-and-drop panel configuration.",
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
