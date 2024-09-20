import React, { useState } from 'react';

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <span className="player">
          <input className="player-name" defaultValue={name} />
          <input className="player-symnol" defaultValue={symbol} />
        </span>
      ) : (
        <span className="player">
          <span className="player-name">{name}</span>
          <span className="player-symnol">{symbol}</span>
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}