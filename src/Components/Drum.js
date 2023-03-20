// import { useEffect } from "react"

export default function Drum(props) {

    const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${props.sound}`)
    
    function playSound() {
        audio.volume = 0.2;
        audio.currentTime = 0;  //resets the sound
        audio.play()
    }

    return (
        <button className="drum-pad" id={`Key${props.keyStroke}`} onClick={playSound} name={props.name}>{props.keyStroke}</button>
    )
}