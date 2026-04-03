import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {/* 404 Illustration */}
          <div className="relative inline-block">
            <div className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              404
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-100 rounded-full animate-pulse delay-150"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="/builder"
            className="block w-full px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Try the Builder
          </Link>
          <Link
            href="/how-it-works"
            className="block w-full px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Learn How it Works
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Lost? Here are some helpful links:
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <Link href="/builder" className="text-blue-600 hover:text-blue-700">
              Builder
            </Link>
            <Link href="/how-it-works" className="text-blue-600 hover:text-blue-700">
              Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
