import { PanelProps } from '@/lib/types';

export default function ChatPanel({ config }: PanelProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="text-lg">💬</span>
        <h3 className="font-semibold text-gray-900">{config.label}</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-3">
          {[
            { sender: 'Emma Davis', message: 'Hey team! Just uploaded the latest design mockups to the shared drive.', time: '10:23 AM', isMe: false },
            { sender: 'You', message: 'Thanks Emma! I\'ll review them this afternoon.', time: '10:25 AM', isMe: true },
            { sender: 'Mike Johnson', message: 'Great work! The new color scheme looks much better 👍', time: '10:28 AM', isMe: false },
            { sender: 'You', message: 'Agreed! Ready to present to the client?', time: '10:30 AM', isMe: true },
            { sender: 'Emma Davis', message: 'Yes! I\'ve scheduled the meeting for tomorrow at 2 PM.', time: '10:31 AM', isMe: false },
          ].map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              {!msg.isMe && (
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-semibold text-xs">
                    {msg.sender.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
              <div className={`max-w-[75%] ${
                msg.isMe ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
              } rounded-lg p-3`}>
                {!msg.isMe && <p className="text-xs font-medium mb-1 opacity-70">{msg.sender}</p>}
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${
                  msg.isMe ? 'text-blue-100' : 'text-gray-500'
                }`}>{msg.time}</p>
              </div>
              {msg.isMe && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs">You</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
