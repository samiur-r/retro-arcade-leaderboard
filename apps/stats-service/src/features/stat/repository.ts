import {prisma} from '@/libs/db';
// @ts-expect-error
import {GameStats} from '@prisma/client';

export const findStatsByGameId = async (
  gameId: string,
): Promise<GameStats | null> => {
  return prisma.gameStats.findUnique({
    where: {gameId},
  });
};

export const createStats = async (data: {
  gameId: string;
  totalPlays?: number;
  bestScore?: number;
}): Promise<GameStats> => {
  return prisma.gameStats.create({
    data,
  });
};

export const updateStats = async (
  gameId: string,
  data: Partial<{totalPlays: number; bestScore: number}>,
): Promise<GameStats> => {
  return prisma.gameStats.update({
    where: {gameId},
    data,
  });
};

export const getAllStats = async (): Promise<GameStats[]> => {
  return prisma.gameStats.findMany({
    orderBy: {updatedAt: 'desc'},
  });
};
