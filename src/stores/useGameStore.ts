import { create } from "zustand";
import { PlayerProps } from "../types/Player";

interface GameStore {
  currentPlayer: PlayerProps | null;
  setCurrentPlayer: (player: PlayerProps) => void;
  players: PlayerProps[];
  setPlayer: (index: number, player: PlayerProps) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: null,
  players: [],
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  setPlayer: (index, player) =>
    set((state) => {
      const players = [...state.players];
      players[index] = player;
      return { players };
    }),
}));
