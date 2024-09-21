import { PlayerProps } from "../Player";

export interface GameStore {
  currentPlayer: PlayerProps | null;
  setCurrentPlayer: (player: PlayerProps) => void;
}
