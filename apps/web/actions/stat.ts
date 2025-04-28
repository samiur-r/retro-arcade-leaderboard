export type GameStats = {
  id: string;
  gameId: string;
  totalPlays: number;
  bestScore: number;
  createdAt: string;
  updatedAt: string;
};

export const getAllStats = async (): Promise<GameStats[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_STATS}/stat`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch arcade stats. Status: ${res.status}`);
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as GameStats[];
};

export const getStatsByGameId = async (gameId: string): Promise<GameStats> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_STAT}/api/stat/${gameId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch stats for game ${gameId}. Status: ${res.status}`
    );
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as GameStats;
};
