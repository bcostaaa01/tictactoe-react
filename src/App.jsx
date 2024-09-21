import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";

function App() {
  const players = [
    { name: "Player 1", symbol: "X", isCurrentlyPlaying: false },
    { name: "Player 2", symbol: "O", isCurrentlyPlaying: false },
  ];

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player, index) => (
            <Player key={index} name={player.name} symbol={player.symbol} />
          ))}
        </ol>
        <GameBoard players={players} />
      </div>
    </main>
  );
}

export default App;
