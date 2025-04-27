import {Request, Response} from 'express';
import * as gameService from './service';

export const getAllGamesHandler = async (req: Request, res: Response) => {
  try {
    const games = await gameService.getGames();
    res.status(200).json({success: true, data: games});
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({success: false, message: 'Failed to fetch games'});
  }
};

export const getGameBySlugHandler = async (req: Request, res: Response) => {
  const {slug} = req.params;
  try {
    const game = await gameService.getGameBySlug(slug);
    res.status(200).json({success: true, data: game});
  } catch (error) {
    console.error('Error fetching game by slug:', error);
    res.status(404).json({success: false, message: 'Game not found'});
  }
};

export const createGameHandler = async (req: Request, res: Response) => {
  const {name, slug} = req.body;
  try {
    const newGame = await gameService.addNewGame(name, slug);
    res.status(201).json({success: true, data: newGame});
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({success: false, message: 'Failed to create game'});
  }
};

export const deleteGameHandler = async (req: Request, res: Response) => {
  const {id} = req.params;
  try {
    const deletedGame = await gameService.removeGame(id);
    res.status(200).json({success: true, data: deletedGame});
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({success: false, message: 'Failed to delete game'});
  }
};
