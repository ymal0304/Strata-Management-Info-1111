export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Strata Management
        </h1>
        <p className="text-xl text-gray-800">
          Your comprehensive solution for managing strata-titled apartment buildings
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Committee Management</h2>
          <p className="text-gray-800">
            Manage committee members, meetings, and decisions efficiently.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Financial Management</h2>
          <p className="text-gray-800">
            Track levies, expenses, and maintain transparent financial records.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Maintenance</h2>
          <p className="text-gray-800">
            Submit and track maintenance requests for common areas.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/committee" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-gray-800">
            Committee Portal
          </a>
          <a href="/finances" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-gray-800">
            Financial Reports
          </a>
          <a href="/maintenance" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-gray-800">
            Maintenance Requests
          </a>
          <a href="/documents" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-gray-800">
            Important Documents
          </a>
        </div>
      </section>
    </div>
  );
}
