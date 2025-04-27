import {prisma} from '@/libs/db';
import {Game} from '@prisma/client';

export const findAllGames = async (): Promise<Game[]> => {
  return prisma.game.findMany({
    orderBy: {createdAt: 'asc'},
  });
};

export const findGameBySlug = async (slug: string): Promise<Game | null> => {
  return prisma.game.findUnique({
    where: {slug},
  });
};

export const createGame = async (data: {
  name: string;
  slug: string;
}): Promise<Game> => {
  return prisma.game.create({
    data,
  });
};

export const deleteGameById = async (id: string): Promise<Game> => {
  return prisma.game.delete({
    where: {id},
  });
};
