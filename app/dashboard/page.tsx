export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Üdvözöljük a vezérlőpulton! 👋</h1>
      <p className="text-gray-400">
        Itt láthatod a legfontosabb statisztikákat és adatokat.
      </p>

      {/* 3 db mutatós statisztika kártya */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Aktív Ügyfelek</h3>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Havi Bevétel</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">+ 850,000 Ft</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Rendszer Állapot</h3>
          <p className="text-3xl font-bold mt-2 text-blue-400">100% Online</p>
        </div>
      </div>
    </div>
  );
}