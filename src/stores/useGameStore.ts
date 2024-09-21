import { create } from "zustand";
import { GameStore } from "../types/stores/GameStore";

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: null,
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
}));
