import { create } from "zustand";
import { GameStore } from "../types/stores/GameStore";

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
  setGameStatus: (status) => set({ gameStatus: status }),
}));
