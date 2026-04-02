import { PanelProps } from '@/lib/types';

export default function ApprovalsPanel({ config }: PanelProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="text-lg">✅</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-3">
          {[
            { id: '2847', title: 'Marketing Budget Q2', amount: '$45,000', requestedBy: 'Sarah Chen', status: 'pending' },
            { id: '2846', title: 'New Hire Approval', department: 'Engineering', requestedBy: 'Mike Johnson', status: 'pending' },
            { id: '2845', title: 'Equipment Purchase', amount: '$12,500', requestedBy: 'Emma Davis', status: 'approved' },
          ].map((approval) => (
            <div key={approval.id} className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">{approval.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      approval.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {approval.status === 'pending' ? 'Pending' : 'Approved'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Request #{approval.id} • {approval.requestedBy}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-3">
                {approval.amount && <p>Amount: <span className="font-medium">{approval.amount}</span></p>}
                {approval.department && <p>Department: <span className="font-medium">{approval.department}</span></p>}
              </div>
              {approval.status === 'pending' && (
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                    ✓ Approve
                  </button>
                  <button className="flex-1 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                    ✕ Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
