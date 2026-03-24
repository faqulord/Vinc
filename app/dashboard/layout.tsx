import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      {/* Bal oldali menü (Sidebar) */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-blue-500">AppLogó</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="block p-3 rounded hover:bg-gray-800 transition-colors"
          >
            📊 Áttekintés (Főoldal)
          </Link>
          <Link
            href="/dashboard/szolgaltatasok"
            className="block p-3 rounded hover:bg-gray-800 transition-colors"
          >
            ⚙️ Szolgáltatások
          </Link>
          <Link
            href="/dashboard/beallitasok"
            className="block p-3 rounded hover:bg-gray-800 transition-colors"
          >
            👤 Beállítások
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link
            href="/"
            className="block text-center p-2 text-red-400 hover:bg-gray-800 rounded transition-colors"
          >
            Kijelentkezés
          </Link>
        </div>
      </aside>

      {/* Fő tartalom helye */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}