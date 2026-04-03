import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your custom dashboard layout with configured panels. Responsive design that adapts to all screen sizes.",
  openGraph: {
    title: "Dashboard - Config-Driven UI Platform",
    description: "Your custom dashboard with dynamic panel configuration.",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
