import { PanelProps } from '@/lib/types';

export default function TasksPanel({ config }: PanelProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="text-lg">✓</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-2">
          {[
            { id: 1, title: 'Review Q4 financial reports', priority: 'high', done: false, assignee: 'Sarah' },
            { id: 2, title: 'Update project documentation', priority: 'medium', done: true, assignee: 'Mike' },
            { id: 3, title: 'Prepare client presentation slides', priority: 'high', done: false, assignee: 'Emma' },
            { id: 4, title: 'Code review for PR #2847', priority: 'medium', done: false, assignee: 'Alex' },
            { id: 5, title: 'Schedule team meeting', priority: 'low', done: true, assignee: 'Lisa' },
            { id: 6, title: 'Update design system components', priority: 'medium', done: false, assignee: 'Sarah' },
            { id: 7, title: 'Test new authentication flow', priority: 'high', done: false, assignee: 'Mike' },
          ].map((task) => (
            <div key={task.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group">
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  checked={task.done}
                  readOnly
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${
                  task.done ? 'line-through text-gray-400' : 'text-gray-900'
                }`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-700' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-gray-500">@{task.assignee}</span>
                </div>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border-2 border-dashed border-gray-300 hover:border-blue-300">
          + Add Task
        </button>
      </div>
    </div>
  );
}
