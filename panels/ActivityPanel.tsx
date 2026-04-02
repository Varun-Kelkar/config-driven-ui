'use client';

import { useState } from 'react';
import { PanelProps } from '@/lib/types';

const ALL_ACTIVITIES = [
  { user: 'Sarah Chen', action: 'completed task', item: 'Q4 Report Review', time: '5 min ago', color: 'green' },
  { user: 'Mike Johnson', action: 'uploaded', item: 'Design Mockups v2', time: '23 min ago', color: 'blue' },
  { user: 'Emma Davis', action: 'commented on', item: 'Marketing Campaign', time: '1 hour ago', color: 'purple' },
  { user: 'Alex Kumar', action: 'created', item: 'New Project Brief', time: '2 hours ago', color: 'indigo' },
  { user: 'Lisa Park', action: 'approved', item: 'Budget Request #2847', time: '3 hours ago', color: 'green' },
  { user: 'James Wilson', action: 'shared', item: 'Client Presentation', time: '4 hours ago', color: 'blue' },
  { user: 'Maria Garcia', action: 'updated', item: 'Team Wiki Page', time: '5 hours ago', color: 'purple' },
  { user: 'David Lee', action: 'closed', item: 'Support Ticket #4521', time: '6 hours ago', color: 'green' },
  { user: 'Sophie Turner', action: 'assigned', item: 'Bug Fix #892', time: '7 hours ago', color: 'indigo' },
  { user: 'Robert Brown', action: 'merged', item: 'Pull Request #156', time: '8 hours ago', color: 'blue' },
  { user: 'Anna Martinez', action: 'scheduled', item: 'Team Retrospective', time: '9 hours ago', color: 'purple' },
  { user: 'Tom Anderson', action: 'reviewed', item: 'Code Review PR #157', time: '10 hours ago', color: 'indigo' },
  { user: 'Jessica White', action: 'deleted', item: 'Old Test Data', time: '11 hours ago', color: 'green' },
  { user: 'Chris Taylor', action: 'deployed', item: 'Production Release v2.3', time: '12 hours ago', color: 'blue' },
  { user: 'Nina Patel', action: 'archived', item: 'Q3 Documents', time: '13 hours ago', color: 'purple' },
  { user: 'Oliver Smith', action: 'started', item: 'Sprint Planning', time: 'Yesterday', color: 'indigo' },
  { user: 'Emily Zhang', action: 'completed', item: 'User Testing Session', time: 'Yesterday', color: 'green' },
  { user: 'Daniel Kim', action: 'published', item: 'Blog Post: New Features', time: '2 days ago', color: 'blue' },
];

export default function ActivityPanel({ config }: PanelProps) {
  const maxItems = (config.props?.maxItems as number) || 5;
  const [showAll, setShowAll] = useState(false);
  
  const displayedActivities = showAll ? ALL_ACTIVITIES : ALL_ACTIVITIES.slice(0, maxItems);
  const hasMore = ALL_ACTIVITIES.length > maxItems;

  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2 flex-shrink-0">
        <span className="text-lg">📊</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="overflow-y-auto flex-1">
        <div className="p-4 space-y-3">
          {displayedActivities.map((activity, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className={`w-10 h-10 rounded-full bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                <span className={`text-${activity.color}-600 font-semibold text-sm`}>
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.item}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        {hasMore && !showAll && (
          <div className="px-4 pb-4">
            <button
              onClick={() => setShowAll(true)}
              className="w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              View More ({ALL_ACTIVITIES.length - maxItems} more)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
