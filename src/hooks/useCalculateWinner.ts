import { Squares } from "../types/Squares";

export const useCalculateWinner = (squares: Squares) => {
  const calculateWinner = (squares: Squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ].map((line) => line.map((index) => squares[index]));
    return (
      lines.find((line) =>
        line.every(
          (value, index, array) => value !== null && value === array[0]
        )
      )?.[0] ?? null
    );
  };

  return calculateWinner(squares);
};
