"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }:{children:React.ReactNode}) {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Reports", href: "/reports" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-md ${
                  pathname === link.href
                    ? "bg-purple-500 font-semibold"
                    : "hover:bg-purple-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
}
