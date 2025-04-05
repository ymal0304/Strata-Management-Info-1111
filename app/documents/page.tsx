'use client';

import { useState } from 'react';

interface Document {
  id: string;
  title: string;
  category: string;
  uploadDate: string;
  size: string;
  type: string;
}

export default function DocumentsPage() {
  const [documents] = useState<Document[]>([
    {
      id: '1',
      title: 'Strata Plan',
      category: 'Legal',
      uploadDate: '2024-01-15',
      size: '2.5 MB',
      type: 'PDF',
    },
    {
      id: '2',
      title: 'Building Insurance Policy',
      category: 'Insurance',
      uploadDate: '2024-02-01',
      size: '1.8 MB',
      type: 'PDF',
    },
    {
      id: '3',
      title: 'Annual General Meeting Minutes',
      category: 'Meetings',
      uploadDate: '2024-03-10',
      size: '450 KB',
      type: 'PDF',
    },
    {
      id: '4',
      title: 'Maintenance Schedule',
      category: 'Maintenance',
      uploadDate: '2024-03-15',
      size: '320 KB',
      type: 'PDF',
    },
  ]);

  const categories = ['All', 'Legal', 'Insurance', 'Meetings', 'Maintenance'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDocuments = selectedCategory === 'All'
    ? documents
    : documents.filter(doc => doc.category === selectedCategory);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">Document Management</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Building Documents</h2>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((document) => (
                <tr key={document.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {document.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Upload New Document</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="space-y-4">
            <p className="text-gray-600">Drag and drop files here or</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Browse Files
            </button>
            <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX, XLS, XLSX</p>
          </div>
        </div>
      </div>
    </div>
  );
} 