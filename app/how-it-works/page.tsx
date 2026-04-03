import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it Works",
  description: "Learn how to build dynamic layouts with our config-driven UI platform. Step-by-step guide to creating responsive dashboards.",
  openGraph: {
    title: "How it Works - Config-Driven UI Platform",
    description: "Step-by-step guide to building responsive layouts with drag-and-drop configuration.",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Config Designer
            </Link>
            <Link
              href="/builder"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Try it Now
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              How it Works
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build dynamic, responsive layouts with our intuitive config-driven platform
            </p>
          </div>

          {/* Steps Section */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Choose Your Panels
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Start by selecting from our collection of pre-built panel components. Each panel serves a specific purpose:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📊</span>
                    <span><strong>Activity Feed</strong> - Track recent actions and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✅</span>
                    <span><strong>Approvals</strong> - Manage pending approvals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">💬</span>
                    <span><strong>Chat</strong> - Display recent messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📅</span>
                    <span><strong>Calendar</strong> - Show upcoming events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📝</span>
                    <span><strong>Tasks</strong> - Manage your task list</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📌</span>
                    <span><strong>Notes</strong> - Quick notes and reminders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Arrange with Drag & Drop
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Use our intuitive drag-and-drop interface to organize your panels. Reorder panels by dragging them into your preferred sequence. The builder provides real-time preview so you can see your layout taking shape.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>💡 Pro Tip:</strong> You can remove any panel by clicking the delete icon, and select panels to configure their properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Configure Your Layout
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Switch between List and Grid modes to customize how your panels display:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">📋 List Mode</h3>
                    <p className="text-sm text-gray-600">
                      Panels stack vertically in a single column. Perfect for mobile-first designs and simple layouts.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">📐 Grid Mode</h3>
                    <p className="text-sm text-gray-600">
                      Create complex multi-column layouts. Control grid columns, row position, column position, and column span for each panel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Fine-Tune Panel Properties
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Select any panel to customize its settings:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Label:</strong> Customize the panel title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Visibility:</strong> Show or hide panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Grid Position:</strong> Set row, column, and spans (Grid mode)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Panel-specific settings:</strong> Like max items for Activity Feed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Preview & Export
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  See your layout in real-time as you build. Switch between Preview and JSON Config tabs:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">👁️ Preview Tab</h3>
                    <p className="text-sm text-gray-600">
                      See exactly how your layout will look with live data. Test responsiveness and panel interactions.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔧 JSON Config Tab</h3>
                    <p className="text-sm text-gray-600">
                      View and copy the generated JSON configuration. Use it to render the same layout anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Save & Deploy
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Once you&apos;re happy with your layout, save it and view it on the dashboard. Your layout is fully responsive - it automatically adapts to mobile, tablet, and desktop screens.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-green-900">
                    <strong>✨ Responsive by Default:</strong> Grid layouts automatically stack to a single column on mobile devices for optimal viewing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Drag & Drop</h3>
                <p className="text-sm text-gray-600">Intuitive visual interface for layout creation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
                <p className="text-sm text-gray-600">Auto-adapts to all screen sizes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">JSON Export</h3>
                <p className="text-sm text-gray-600">Copy config for use anywhere</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start building your custom dashboard layout in minutes. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/builder"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Try the Builder
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 bg-white border-t border-gray-200">
        <p>Config-Driven UI Platform • Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
