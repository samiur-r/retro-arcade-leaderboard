import Link from "next/link";
import { getAllGames } from "../actions/game";

export default async function HomePage() {
  const games = await getAllGames();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="text-center mb-10 sm:mb-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Retro Arcade Leaderboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Compete for high scores on classic arcade games...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-sm w-full flex flex-col gap-5 px-5 py-10"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {game.name}
            </h2>

            <div className="mt-4 flex gap-4">
              <Link
                href={`/play/${game.slug}`}
                className="text-purple-700 dark:text-purple-300 font-medium text-sm hover:underline"
              >
                Play
              </Link>
              <Link
                href={`/leaderboard/${game.slug}`}
                className="text-purple-700 dark:text-purple-300 font-medium text-sm hover:underline"
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
