import Link from "next/link";
import { getStatsByGameId } from "../../../actions/stat";

export default async function Page({
  params,
}: {
  params: Promise<{ gameId: string }>
}) {
  const { gameId } = await params;

  let gameStats;
  try {
    gameStats = await getStatsByGameId(gameId);
  } catch (error) {
    console.error(error);
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Failed to load stats
        </h1>
        <Link href="/" className="text-blue-500 underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">
        🏆 {gameId.toUpperCase()} Leaderboard
      </h1>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col gap-4">
          <div className="text-xl">
            <span className="font-bold">Game ID:</span> {gameStats.gameId}
          </div>
          <div className="text-xl">
            <span className="font-bold">Total Plays:</span>{" "}
            {gameStats.totalPlays}
          </div>
          <div className="text-xl">
            <span className="font-bold">Best Score:</span> {gameStats.bestScore}
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="mt-8 text-blue-400 underline hover:text-blue-600"
      >
        ← Back to Arcade
      </Link>
    </div>
  );
}
