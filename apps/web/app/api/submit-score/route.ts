import { submitScore } from "../../../actions/score";

export async function POST(req: Request) {
  const { gameSlug, score } = await req.json();

  if (!gameSlug || typeof score !== "number") {
    return new Response("Invalid request", { status: 400 });
  }

  try {
    const result = await submitScore(gameSlug, score);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error submitting score:", error);
    return new Response("Failed to submit score", { status: 500 });
  }
}
