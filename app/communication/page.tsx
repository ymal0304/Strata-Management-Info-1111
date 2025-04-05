'use client';

import { useState } from 'react';

interface Message {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  category: 'announcement' | 'discussion' | 'question';
}

export default function CommunicationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      author: 'Strata Committee',
      content: 'Reminder: Annual General Meeting on April 15th at 7:00 PM in the common room.',
      timestamp: '2024-03-28 10:00',
      category: 'announcement',
    },
    {
      id: '2',
      author: 'John Smith (Unit 101)',
      content: 'Has anyone noticed the elevator making unusual noises?',
      timestamp: '2024-03-27 15:30',
      category: 'question',
    },
    {
      id: '3',
      author: 'Sarah Johnson (Unit 205)',
      content: 'Yes, I noticed it too. I think we should report it to the committee.',
      timestamp: '2024-03-27 16:15',
      category: 'discussion',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Message['category']>('discussion');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      author: 'Current User',
      content: newMessage,
      timestamp: new Date().toISOString(),
      category: selectedCategory,
    };

    setMessages([message, ...messages]);
    setNewMessage('');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">Communication Portal</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Post a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Message['category'])}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="announcement">Announcement</option>
              <option value="discussion">Discussion</option>
              <option value="question">Question</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post Message
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Messages</h2>
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="border-b pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{message.author}</h3>
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      message.category === 'announcement'
                        ? 'bg-blue-100 text-blue-800'
                        : message.category === 'question'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {message.category.charAt(0).toUpperCase() + message.category.slice(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{message.timestamp}</span>
              </div>
              <p className="mt-2 text-gray-700">{message.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Important Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium">Emergency Contacts</h3>
            <ul className="mt-2 space-y-2">
              <li>Building Manager: 0400 000 000</li>
              <li>Emergency Maintenance: 1300 000 000</li>
              <li>Security: 0400 000 001</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium">Committee Members</h3>
            <ul className="mt-2 space-y-2">
              <li>Chairperson: chair@example.com</li>
              <li>Secretary: secretary@example.com</li>
              <li>Treasurer: treasurer@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 