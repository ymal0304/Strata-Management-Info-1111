'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Committee', path: '/committee' },
    { name: 'Finances', path: '/finances' },
    { name: 'Maintenance', path: '/maintenance' },
    { name: 'Documents', path: '/documents' },
    { name: 'Communication', path: '/communication' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Strata Management</div>
          <div className="space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-blue-200 ${
                  pathname === item.path ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 