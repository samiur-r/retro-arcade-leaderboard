import { notFound } from "next/navigation";
import { getGameBySlug } from "../../../actions/game";

type PlayPageProps = {
  params: {
    gameId: string;
  };
};

export default async function PlayPage({ params }: PlayPageProps) {
  const { gameId } = params;

  let game;
  try {
    game = await getGameBySlug(gameId);
  } catch (error) {
    console.error("Error fetching game:", error);
    notFound();
  }

  if (!game) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🎮 {game.name}</h1>

      <div className="flex items-center justify-center">
        <iframe
          src={`/games/${game.slug}/index.html`}
          title={game.name}
          className="w-full max-w-3xl h-[600px] border-2 border-gray-300 rounded-lg shadow-md"
        />
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="bg-blue-500 text-white rounded-xl px-6 py-3 text-lg hover:bg-blue-600 transition"
        >
          Back to Games
        </a>
      </div>
    </main>
  );
}
