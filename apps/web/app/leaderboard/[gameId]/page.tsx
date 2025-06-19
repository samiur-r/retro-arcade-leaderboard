import Link from "next/link";
import { getStatsByGameId } from "../../../actions/stat";

export default async function Page({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;

  let gameStats;
  try {
    gameStats = await getStatsByGameId(gameId);
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 dark:bg-black dark:text-white px-4">
        <h1 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">
          Failed to load stats
        </h1>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition"
        >
          ← Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">
        🏆 {gameId.toUpperCase()} Leaderboard
      </h1>

      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 sm:p-10 rounded-xl shadow-md w-full max-w-lg">
        <div className="space-y-6 text-lg sm:text-xl">
          <div>
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Game ID:
            </span>{" "}
            <span>{gameStats.gameId}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Total Plays:
            </span>{" "}
            <span>{gameStats.totalPlays}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Best Score:
            </span>{" "}
            <span>{gameStats.bestScore}</span>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="mt-12 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline text-sm sm:text-base transition"
      >
        ← Back to Arcade
      </Link>
    </div>
  );
}
