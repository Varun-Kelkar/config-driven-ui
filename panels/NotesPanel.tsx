import { PanelProps } from '@/lib/types';

export default function NotesPanel({ config }: PanelProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="text-lg">📝</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-3">
          {[
            {
              title: 'Meeting Notes - Q2 Planning',
              content: 'Key decisions: Focus on mobile optimization, allocate 30% budget to marketing, launch date set for June 15th.',
              date: 'Today',
              color: 'yellow'
            },
            {
              title: 'Project Ideas',
              content: 'Explore AI-powered recommendation engine, consider implementing dark mode, research competitor features.',
              date: 'Yesterday',
              color: 'blue'
            },
            {
              title: 'Client Feedback',
              content: 'Love the new UI design! Requested minor color adjustments and faster load times. Follow up next week.',
              date: '2 days ago',
              color: 'purple'
            },
            {
              title: 'Team Retrospective',
              content: 'What went well: Better communication, faster deployments. To improve: Code reviews, documentation.',
              date: 'Apr 1',
              color: 'green'
            },
          ].map((note, i) => (
            <div key={i} className={`p-4 bg-${note.color}-50 border border-${note.color}-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer group`}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900 flex-1">{note.title}</h4>
                <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{note.content}</p>
              <p className="text-xs text-gray-500">{note.date}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border-2 border-dashed border-gray-300 hover:border-gray-400">
          + New Note
        </button>
      </div>
    </div>
  );
}
