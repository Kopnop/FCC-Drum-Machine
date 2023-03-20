import { useRef, useState } from "react";

export default function Drum(props) {

    const audioRef = useRef()
    const [clicked, setClicked] = useState(false)

    function handleClick(e) {
        if (props.isPowered) {
            audioRef.current.volume = props.volume / 100
            audioRef.current.currentTime = 0
            audioRef.current.play()
            animateClick()
        }
    }

    function animateClick() {
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 100);
    }

    return (
        <div>
            <button className={clicked ? "drum-pad clicked" : "drum-pad"} id={`Key${props.keyStroke}`} onClick={handleClick} name={props.name}>{props.keyStroke}</button>
            <audio ref={audioRef} src={`https://s3.amazonaws.com/freecodecamp/drums/${props.sound}`} volume={props.volume} />
        </div>
    )
}