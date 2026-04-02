import Link from "next/link";
import { redirect } from "next/navigation";
import { getLayoutConfig } from "@/lib/configActions";
import { getPanelComponent } from "@/lib/panelRegistry";

export default async function DashboardPage() {
  // Fetch saved config from server
  const config = await getLayoutConfig();

  // If no config saved, redirect to builder
  if (!config) {
    redirect("/builder");
  }

  const visiblePanels = config.panels
    .filter((p) => p.visible)
    .sort((a, b) => a.order - b.order);

  const gridColumns = config.settings?.gridColumns || 4;
  const gridGap = config.settings?.gridGap || 16;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className=" mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                {config.mode === "grid" ? "Grid Layout" : "List Layout"} •{" "}
                {visiblePanels.length} panels
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/"
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/builder"
                className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Edit Layout
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1800px] mx-auto p-4 md:p-6">
          {visiblePanels.length === 0 ? (
            <div className="flex items-center justify-center h-[500px] text-center">
              <div className="text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="text-lg font-medium">No panels configured</p>
                <p className="text-sm mt-1">Go to the builder to add panels</p>
              </div>
            </div>
          ) : config.mode === "grid" ? (
            // Grid Layout - Responsive: single column on mobile, full grid on md+
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  .dashboard-responsive-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: ${gridGap}px;
                  }
                  .dashboard-grid-item {
                    grid-column: 1 / -1;
                  }
                  @media (min-width: 768px) {
                    .dashboard-responsive-grid {
                      grid-template-columns: repeat(${gridColumns}, 1fr);
                    }
                    .dashboard-grid-item {
                      grid-column: var(--grid-column);
                      grid-row: var(--grid-row);
                    }
                  }
                `,
                }}
              />
              <div className="dashboard-responsive-grid auto-rows-auto">
                {visiblePanels.map((panelConfig) => {
                  const PanelComponent = getPanelComponent(panelConfig.type);
                  const gridPos = panelConfig.grid || {
                    row: 1,
                    col: 1,
                    colSpan: 1,
                  };

                  return (
                    <div
                      key={panelConfig.id}
                      className="dashboard-grid-item"
                      style={
                        {
                          "--grid-row": `${gridPos.row}`,
                          "--grid-column": `${gridPos.col} / span ${gridPos.colSpan}`,
                        } as React.CSSProperties
                      }
                    >
                      <PanelComponent config={panelConfig} />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            // List Layout
            <div className="max-w-5xl mx-auto space-y-4">
              {visiblePanels.map((panelConfig) => {
                const PanelComponent = getPanelComponent(panelConfig.type);
                return (
                  <div key={panelConfig.id}>
                    <PanelComponent config={panelConfig} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
