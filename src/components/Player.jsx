export function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symnol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}