import { useState, useEffect } from "react";
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
  const calculateWinner = useCalculateWinner(squares);
  const winner = calculateWinner;

  const { setGameStatus } = useGameStore();

  useEffect(() => {
    if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else if (squares.every((square) => square)) {
      setGameStatus("draw");
    } else {
      setGameStatus(`Next player: ${players[xIsNext ? 0 : 1].name}`);
    }
  }, [squares, winner, xIsNext, players, setGameStatus]);

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;
    const newSquares = squares.slice();
    newSquares[index] = players[xIsNext ? 0 : 1].symbol;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return { squares, handleClick, winner };
};

export function GameBoard({ players }: GameBoardProps) {
  const { setCurrentPlayer, gameStatus } = useGameStore();
  const { squares, handleClick, winner } = useGameLogic(players);
  const gameOver = winner || gameStatus === "draw";

  const handlePlayerClick = (index: number) => {
    handleClick(index);
    setCurrentPlayer(players[index]);
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div>
      {gameOver && (
        <div id="game-over">
          <h2>{winner ? `Winner: ${winner}` : "It's a draw!"}</h2>
          <p>Game Over</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
      {!gameOver && (
        <div id="game-board">
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handlePlayerClick(index)}
            />
          ))}
        </div>
      )}
      <div className="status">{gameStatus}</div>
    </div>
  );
}
