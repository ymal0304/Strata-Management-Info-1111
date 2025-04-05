'use client';

import { useState } from 'react';

interface CommitteeMember {
  name: string;
  role: string;
  unit: string;
  email: string;
}

export default function CommitteePage() {
  const [members] = useState<CommitteeMember[]>([
    {
      name: 'John Smith',
      role: 'Chairperson',
      unit: 'Unit 101',
      email: 'john.smith@example.com',
    },
    {
      name: 'Sarah Johnson',
      role: 'Secretary',
      unit: 'Unit 205',
      email: 'sarah.johnson@example.com',
    },
    {
      name: 'Michael Brown',
      role: 'Treasurer',
      unit: 'Unit 302',
      email: 'michael.brown@example.com',
    },
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">Committee Management</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Committee Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Meetings</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium">Quarterly General Meeting</h3>
            <p className="text-gray-600">Date: April 15, 2024</p>
            <p className="text-gray-600">Time: 7:00 PM</p>
            <p className="text-gray-600">Location: Building Common Room</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium">Committee Meeting</h3>
            <p className="text-gray-600">Date: April 5, 2024</p>
            <p className="text-gray-600">Time: 6:30 PM</p>
            <p className="text-gray-600">Location: Online (Zoom)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 