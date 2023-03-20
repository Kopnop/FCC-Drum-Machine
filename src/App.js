import Drum from "./Components/Drum";
import sounds from "./data/sounds";
import { useState, useEffect } from "react";

function App() {

  const [allDrums, setAllDrums] = useState([])
  const [isPowered, setIsPowered] = useState(true)
  const [volume, setVolume] = useState(33)
  const [lastClicked, setLastClicked] = useState("")

  function changeDisplay(e) {
    if (isPowered && e.target.type === "submit") {
      setLastClicked(e.target.name)
    }
  }

  function changeVolume(e) {
    if (isPowered) {
      setVolume(e.target.value)
    }
  }

  useEffect(() => {
    setAllDrums(sounds.map((item) => {
      return {
        keyStroke: item.key,
        sound: item.url,
        name: item.name
      }
    }))
  }, [])

  useEffect(() => {
    setLastClicked(`Volume: ${volume}`)
  }, [volume])

  useEffect(() => {
    setLastClicked("")
  }, [isPowered])

  useEffect(() => {
    function handleKeyPress(e) {
      if (isPowered && allDrums.some(item => item.keyStroke === e.code.slice(-1))) {
        document.getElementById(e.code).click()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return function cleanup() {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [allDrums, isPowered])

  return (
    <main>
      <div id="drum-machine">
        <div className="drumDiv" onClick={changeDisplay}>
          {allDrums.map(item => <Drum key={item.keyStroke} keyStroke={item.keyStroke} sound={item.sound} name={item.name} isPowered={isPowered} volume={volume} />)}
        </div>
        <div className="optionsDiv">
          <label className="powerswitch" htmlFor="isPowered">            
            <input id="isPowered" type="checkbox" checked={isPowered} onChange={() => setIsPowered(prevIsPowered => !prevIsPowered)} />
            <p>Power</p>
          </label>
          <div className="display">
            <p id="display--p">{lastClicked}</p>
          </div>
          <input className="volumeslider" type="range" min="0" max="100" value={volume} onChange={changeVolume} />
          <p className="volume--p">Volume</p>
        </div>
      </div>
    </main>
  );
}

export default App;