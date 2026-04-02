import Link from "next/link";

export default async function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section with White Background */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Welcome to The
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
                Config Designer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">
              Build dynamic layouts with drag-and-drop panel configuration.
              Design once, render anywhere.
            </p>

            {/* Hero Image/Illustration */}
            <div className="my-12 flex justify-center">
              <div className="relative w-full max-w-3xl">
                <div className="aspect-video rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-2xl border-2 border-gray-100 dark:border-gray-700">
                  <div className="h-full flex items-center justify-center">
                    {/* Simple SVG Illustration */}
                    <svg
                      className="w-full h-full max-w-md"
                      viewBox="0 0 400 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Panel Grid Illustration */}
                      <rect x="20" y="20" width="360" height="260" rx="12" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
                      <rect x="40" y="40" width="150" height="100" rx="8" fill="#3B82F6" fillOpacity="0.8" />
                      <rect x="210" y="40" width="150" height="100" rx="8" fill="#6366F1" fillOpacity="0.8" />
                      <rect x="40" y="160" width="320" height="100" rx="8" fill="#8B5CF6" fillOpacity="0.8" />
                      {/* Drag Indicators */}
                      <circle cx="60" cy="55" r="4" fill="white" fillOpacity="0.9" />
                      <circle cx="70" cy="55" r="4" fill="white" fillOpacity="0.9" />
                      <circle cx="230" cy="55" r="4" fill="white" fillOpacity="0.9" />
                      <circle cx="240" cy="55" r="4" fill="white" fillOpacity="0.9" />
                    </svg>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center gap-4">
              <Link
                href="/builder"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
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
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
              >
                How it Works
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <p>Config-Driven UI Platform • Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
