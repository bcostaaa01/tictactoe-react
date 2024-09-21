import { PlayerProps } from "../Player";

export interface GameStore {
  currentPlayer: PlayerProps | null;
  gameStatus?: string;
  setCurrentPlayer: (player: PlayerProps) => void;
  players: PlayerProps[];
  setGameStatus: (status: string) => void;
}