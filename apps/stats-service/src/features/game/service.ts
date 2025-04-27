import * as gameRepository from './repository';

export const getGames = async () => {
  return gameRepository.findAllGames();
};

export const getGameBySlug = async (slug: string) => {
  const game = await gameRepository.findGameBySlug(slug);
  if (!game) throw new Error('Game not found');
  return game;
};

export const addNewGame = async (name: string, slug: string) => {
  return gameRepository.createGame({name, slug});
};

export const removeGame = async (id: string) => {
  return gameRepository.deleteGameById(id);
};
