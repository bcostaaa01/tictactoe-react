import React, { useState } from "react";
import { PlayerProps } from "../types/Player";

export function Player({ name, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSetIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const renderPlayerDetails = () => {
    return (
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
    );
  };

  const renderPlayerForm = () => {
    return (
      <span className="player">
        <input className="player-name" defaultValue={name} />
        <input className="player-symbol" defaultValue={symbol} />
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
