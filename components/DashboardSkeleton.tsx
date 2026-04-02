export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Shimmer */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1800px] mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-2">
              <div className="h-7 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-10 w-28 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Shimmer */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1800px] mx-auto p-4 md:p-6">
          <div className="space-y-4">
            {/* Large shimmer blocks representing potential panels */}
            <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse bg-[length:200%_100%]" 
                 style={{ animation: 'shimmer 2s infinite linear' }}>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse bg-[length:200%_100%]"
                   style={{ animation: 'shimmer 2s infinite linear' }}>
              </div>
              <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse bg-[length:200%_100%]"
                   style={{ animation: 'shimmer 2s infinite linear' }}>
              </div>
            </div>
            <div className="h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse bg-[length:200%_100%]"
                 style={{ animation: 'shimmer 2s infinite linear' }}>
            </div>
          </div>
        </div>
      </main>

      {/* Shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
