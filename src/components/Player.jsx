import React, { useState } from "react";

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSetIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const renderPlayerDetails = () => {
    return (
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symnol">{symbol}</span>
      </span>
    );
  };

  const renderPlayerForm = () => {
    return (
      <span className="player">
        <input className="player-name" defaultValue={name} />
        <input className="player-symnol" defaultValue={symbol} />
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
