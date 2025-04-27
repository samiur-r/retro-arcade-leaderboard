export type Game = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
};

export const getAllGames = async (): Promise<Game[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GAME}/api/game`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch games. Status: ${res.status}`);
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as Game[];
};

export const getGameBySlug = async (slug: string): Promise<Game> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_GAME}/api/game/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch game: ${slug}. Status: ${res.status}`);
  }

  const json = await res.json();

  if (!json.data) {
    throw new Error("Invalid response format: missing 'data' field.");
  }

  return json.data as Game;
};
