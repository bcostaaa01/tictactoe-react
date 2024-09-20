import { useState } from "react";
import Square from "./Square";
import { PlayerProps } from "../types/Player";
import { useCalculateWinner } from "../hooks/useCalculateWinner";

interface GameBoardProps {
  players: PlayerProps[];
}

const useGameLogic = (players: PlayerProps[]) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = useCalculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner) return;
    const newSquares = squares.slice();
    newSquares[index] = players[xIsNext ? 0 : 1].symbol;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner;
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${players[xIsNext ? 0 : 1].name}`;

  return { squares, handleClick, status, winner };
};

export function GameBoard({ players }: GameBoardProps) {
  const { squares, handleClick, status } = useGameLogic(players);

  return (
    <div>
      <div id="game-board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="status">{status}</div>
    </div>
  );
}
