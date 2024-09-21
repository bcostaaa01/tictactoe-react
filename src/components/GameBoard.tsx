import { useState } from "react";
import Square from "./Square";
import { PlayerProps } from "../types/Player";
import { useCalculateWinner } from "../hooks/useCalculateWinner";
import { useGameStore } from "../stores/useGameStore";

interface GameBoardProps {
  players: PlayerProps[];
}

const useGameLogic = (players: PlayerProps[]) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  const calculateWinner = useCalculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner) return;
    const newSquares = squares.slice();
    newSquares[index] = players[xIsNext ? 0 : 1].symbol;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setCurrentPlayer(players[xIsNext ? 1 : 0]);
  };

  const winner = calculateWinner;
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${players[xIsNext ? 0 : 1].name}`;

  return { squares, handleClick, status, winner, currentPlayer };
};

export function GameBoard({ players }: GameBoardProps) {
  const { setCurrentPlayer, currentPlayer } = useGameStore();
  const { squares, handleClick, status } = useGameLogic(players);

  const handlePlayerClick = (index: number) => {
    handleClick(index);
    setCurrentPlayer(players[index]);
  };

  return (
    <div>
      <div id="game-board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handlePlayerClick(index)}
          />
        ))}
      </div>
      <div className="status">{status}</div>
      <ol id="players">
        {players.map((player) => (
          <Player
            key={player.name}
            name={player.name}
            symbol={player.symbol}
            isCurrentlyPlaying={currentPlayer?.name === player.name} // Check if current player
          />
        ))}
      </ol>
    </div>
  );
}
