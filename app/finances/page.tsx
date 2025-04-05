'use client';

import { useState } from 'react';

interface FinancialRecord {
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export default function FinancesPage() {
  const [records] = useState<FinancialRecord[]>([
    {
      date: '2024-03-01',
      description: 'Quarterly Levy Payment - Unit 101',
      amount: 1200,
      type: 'income',
    },
    {
      date: '2024-03-01',
      description: 'Quarterly Levy Payment - Unit 205',
      amount: 1200,
      type: 'income',
    },
    {
      date: '2024-03-15',
      description: 'Building Insurance Premium',
      amount: 5000,
      type: 'expense',
    },
    {
      date: '2024-03-20',
      description: 'Garden Maintenance',
      amount: 800,
      type: 'expense',
    },
  ]);

  const totalIncome = records
    .filter((record) => record.type === 'income')
    .reduce((sum, record) => sum + record.amount, 0);

  const totalExpenses = records
    .filter((record) => record.type === 'expense')
    .reduce((sum, record) => sum + record.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">Financial Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-800">Total Income</h2>
          <p className="text-3xl font-bold text-green-600">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-800">Total Expenses</h2>
          <p className="text-3xl font-bold text-red-600">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-800">Current Balance</h2>
          <p className="text-3xl font-bold text-blue-600">${balance.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Financial Records</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${record.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        record.type === 'income'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {record.type.charAt(0).toUpperCase() + record.type.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Levy Payments</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium">Q2 2024 Levy</h3>
            <p className="text-gray-600">Due Date: June 1, 2024</p>
            <p className="text-gray-600">Amount: $1,200 per unit</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium">Q3 2024 Levy</h3>
            <p className="text-gray-600">Due Date: September 1, 2024</p>
            <p className="text-gray-600">Amount: $1,200 per unit</p>
          </div>
        </div>
      </div>
    </div>
  );
} 