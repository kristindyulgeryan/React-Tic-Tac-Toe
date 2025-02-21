import { use } from "react"
import { useState } from "react"


export default function Player({name, symbol}){
const [isEditing, setIsEditing] = useState(false) ;

function handleEditclick(){
    setIsEditing(true)
}

let playerName = <span className="player-name">{name}</span>

if(isEditing){
    playerName = <input type="text" requried />
}
    return (
<li>
         <span className="player">
         {playerName}
         <span className="player-symbol">{symbol}</span>
         </span>
        <button onClick={handleEditclick}>Edit</button>
</li>
    )
    
}