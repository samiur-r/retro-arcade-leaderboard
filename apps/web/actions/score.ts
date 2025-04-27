export type Score = {
  id: string;
  gameId: string;
  score: number;
  createdAt: string;
};

export const getLeaderboard = async (
  gameId: string,
  limit = 10
): Promise<Score[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_SCORES}/score/${gameId}?limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch leaderboard for game ${gameId}. Status: ${res.status}`
    );
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as Score[];
};

export const submitScore = async (
  gameId: string,
  score: number
): Promise<Score> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SCORES}/score`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, score }),
  });

  if (!res.ok) {
    throw new Error(`Failed to submit score. Status: ${res.status}`);
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as Score;
};
