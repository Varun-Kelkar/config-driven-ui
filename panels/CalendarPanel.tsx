import { PanelProps } from '@/lib/types';

export default function CalendarPanel({ config }: PanelProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="text-lg">📅</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">April 2026</h3>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">‹</button>
              <button className="p-1 hover:bg-gray-100 rounded">›</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-600 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={i} className="py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i >= 2 && i <= 31 ? i - 1 : null;
              const isToday = day === 2;
              const hasEvent = [5, 10, 15, 20].includes(day || 0);
              return (
                <div
                  key={i}
                  className={`aspect-square flex flex-col items-center justify-center text-sm rounded relative ${
                    !day ? 'text-gray-300' :
                    isToday ? 'bg-blue-600 text-white font-semibold' :
                    'text-gray-700 hover:bg-gray-100 cursor-pointer'
                  }`}
                >
                  {day}
                  {hasEvent && !isToday && (
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute bottom-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Upcoming Events</h4>
          <div className="space-y-2">
            {[
              { title: 'Team Standup', time: '9:00 AM', color: 'blue' },
              { title: 'Client Presentation', time: '2:00 PM', color: 'purple' },
              { title: 'Design Review', time: '4:30 PM', color: 'green' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div className={`w-2 h-2 rounded-full bg-${event.color}-500 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
