import { useState } from "react";
import { PlayerProps } from "../types/Player";

export function Player({ name, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: name,
    symbol: symbol,
  });
  const [playerName, setPlayerName] = useState(name);
  const [playerSymbol, setPlayerSymbol] = useState(symbol);

  const handleSetIsEditing = () => {
    if (isEditing) {
      setPlayerName(editedValues.name);
      setPlayerSymbol(editedValues.symbol);
    }
    setIsEditing((prevValue) => !prevValue);
  };

  const handleChange = (field: "name" | "symbol", value: string) => {
    setEditedValues((prev) => ({ ...prev, [field]: value }));
  };

  const renderPlayerDetails = () => {
    return (
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{playerSymbol}</span>
      </span>
    );
  };

  const renderPlayerForm = () => {
    return (
      <span className="player">
        <input
          className="player-name"
          value={editedValues.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          className="player-symbol"
          value={editedValues.symbol}
          onChange={(e) => handleChange("symbol", e.target.value)}
        />
      </span>
    );
  };

  return (
    <li className="player">
      {isEditing ? renderPlayerForm() : renderPlayerDetails()}
      <button onClick={handleSetIsEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
