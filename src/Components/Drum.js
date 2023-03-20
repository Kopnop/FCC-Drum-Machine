// import { useEffect } from "react"

import { useState } from "react";

export default function Drum(props) {

    const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${props.sound}`)
    const [clicked, setClicked] = useState(false)

    function playSound(e) {
        if (props.isPowered) {
            audio.volume = 0.2;
            audio.currentTime = 0;  //resets the sound
            audio.play()
            setClicked(true)
            setTimeout(() => {
                setClicked(false)
            }, 100);
        }
    }

    return (
        <button className={clicked ? "drum-pad clicked" : "drum-pad"} id={`Key${props.keyStroke}`} onClick={playSound} name={props.name}>{props.keyStroke}</button>
    )
}