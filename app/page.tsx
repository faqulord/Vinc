"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Itt lesz majd az igazi bejelentkezési logika (Supabase/Stripe)
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          Rendszer Belépés
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Email cím
            </label>
            <input
              type="email"
              placeholder="admin@ceged.hu"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Jelszó
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors mt-4"
          >
            Belépés a Dashboardra
          </button>
        </form>
      </div>
    </div>
  );
}