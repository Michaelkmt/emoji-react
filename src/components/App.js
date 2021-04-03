import React  from "react";
import {Entry}   from "./Entry";
import emojipedia  from "../emojipedia";
// import { Entry } from "./Entry";


export function App() {
    console.log(emojipedia)
    return(
        <div>
            <h1>TITLE</h1>

            <div className="dictionary">
            {emojipedia.map((element) => (
                <Entry emojiId={element.id} emojiImg={element.emoji} emojiName={element.name} emojiMeaning={element.meaning}/>
            ))}
            
            </div>

        </div>
    )
}







