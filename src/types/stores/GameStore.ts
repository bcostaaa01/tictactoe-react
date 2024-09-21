import { PlayerProps } from "../Player";

export interface GameStore {
  currentPlayer: PlayerProps | null;
  gameStatus?: string;
  setCurrentPlayer: (player: PlayerProps) => void;
  players: PlayerProps[];
  setPlayer: (index: number, player: PlayerProps) => void;
  setGameStatus: (status: string) => void;
}