export default function Drum(props) {

    const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${props.sound}`)
    
    function playSound() {
        audio.currentTime = 0;  //resets the sound
        audio.play()
    }

    return (
        <button className="drum-pad" id={props.name} onClick={playSound}>{props.keyStroke}</button>
    )
}