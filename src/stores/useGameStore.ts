import create from 'zustand';
import { PlayerProps } from '../types/Player';

interface GameStore {
  currentPlayer: PlayerProps | null;
  setCurrentPlayer: (player: PlayerProps) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: null,
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
}));
