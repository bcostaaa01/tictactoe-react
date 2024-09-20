import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";

function App() {
  const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
  ];

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player) => (
            <Player key={player.name} name={player.name} symbol={player.symbol} />
          ))}
        </ol>
        <GameBoard players={players} />
      </div>
    </main>
  );
}

export default App;
