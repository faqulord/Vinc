"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Teszt admin bejelentkezés
    if (phone === "+36301209301" && password === "admin1234") {
      router.push("/dashboard");
    } else {
      setError("Hibás telefonszám vagy jelszó!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-800">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-500">
          VIP Belépés
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">Zártkörű rendszer</p>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Telefonszám
            </label>
            <input
              type="tel"
              placeholder="+36301234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-600"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors mt-4"
          >
            Belépés
          </button>
        </form>

        <div className="mt-6 text-center border-t border-gray-800 pt-4">
          <p className="text-gray-400 text-sm">Nincs még hozzáférésed?</p>
          <Link href="/register" className="text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors">
            Regisztráció meghívóval &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}