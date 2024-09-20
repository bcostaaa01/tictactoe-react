import Square from "./Square";

export function GameBoard () {
    const handleClick = (index: number) => {
        console.log(index);
    };

    const squares = Array(9).fill(null);

    return (
        <div className="game-board">
            <div className="game-board-row">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onClick={() => handleClick(index)} />
                ))}
            </div>
        </div>
    );
}