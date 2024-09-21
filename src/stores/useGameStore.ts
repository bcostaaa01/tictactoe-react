import { create } from "zustand";
import { GameStore } from "../types/stores/GameStore";

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: null,
  players: [],
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  setGameStatus: (status) => set({ gameStatus: status }),
}));
