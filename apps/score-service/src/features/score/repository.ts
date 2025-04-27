import {prisma} from '@/libs/db';
import {Score} from '@prisma/client';

export const createScore = async (data: {
  gameId: string;
  score: number;
}): Promise<Score> => {
  return prisma.score.create({
    data,
  });
};

export const getTopScoresByGameId = async (
  gameId: string,
  limit = 10,
): Promise<Score[]> => {
  return prisma.score.findMany({
    where: {gameId},
    orderBy: {score: 'desc'},
    take: limit,
  });
};

export const getAllScores = async (): Promise<Score[]> => {
  return prisma.score.findMany({
    orderBy: {createdAt: 'desc'},
  });
};
