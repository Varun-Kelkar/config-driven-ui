export default function BuilderLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
              <div>
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-10 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Skeleton */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1800px] mx-auto p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Left Panel */}
            <div className="lg:col-span-3">
              <div className="h-[600px] bg-white rounded-lg border border-gray-200 p-4">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Panel */}
            <div className="lg:col-span-4">
              <div className="h-[600px] bg-white rounded-lg border border-gray-200 animate-pulse"></div>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-5">
              <div className="h-[600px] bg-white rounded-lg border border-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
