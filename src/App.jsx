import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { useGameStore } from "./stores/useGameStore";

function App() {
  const { setPlayer } = useGameStore();

  const players = [
    { name: "Player 1", symbol: "X", isCurrentlyPlaying: false },
    { name: "Player 2", symbol: "O", isCurrentlyPlaying: false },
  ];

  players.forEach((player, index) => setPlayer(index, player));

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((_, index) => (
            <Player key={index} index={index} />
          ))}
        </ol>
        <GameBoard players={players} />
      </div>
    </main>
  );
}

export default App;
