import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditclick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerNamer = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerNamer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {editablePlayerNamer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditclick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
