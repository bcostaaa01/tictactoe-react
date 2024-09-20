import React, { useState } from "react";
import { PlayerProps } from "../types/Player";

export function Player({ name, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedSymbol, setEditedSymbol] = useState(symbol);
  const [playerName, setPlayerName] = useState(name);
  const [playerSymbol, setPlayerSymbol] = useState(symbol);

  const handleSetIsEditing = () => {
    if (isEditing) {
      setPlayerName(editedName);
      setPlayerSymbol(editedSymbol);
    }
    setIsEditing((prevValue) => !prevValue);
  };

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
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
          value={editedName}
          onChange={(e) => handleChange(setEditedName, e)}
        />
        <input
          className="player-symbol"
          value={editedSymbol}
          onChange={(e) => handleChange(setEditedSymbol, e)}
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
