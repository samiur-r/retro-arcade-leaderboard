import Link from "next/link";
import { getAllGames } from "../actions/game";

export default async function HomePage() {
  const games = await getAllGames();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🎮 Retro Arcade</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-4">{game.name}</h2>

            <div className="flex flex-col gap-4">
              <Link
                href={`/play/${game.slug}`}
                className="bg-blue-500 text-white rounded-xl px-4 py-2 text-center hover:bg-blue-600 transition"
              >
                Play
              </Link>
              <Link
                href={`/leaderboard/${game.slug}`}
                className="bg-gray-700 text-white rounded-xl px-4 py-2 text-center hover:bg-gray-800 transition"
              >
                Leaderboard
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
