import Drum from "./Components/Drum";
import sounds from "./data/sounds";
import { useState, useEffect } from "react";

function App() {

  const [lastClicked, setLastClicked] = useState("")
  const [allDrums, setAllDrums] = useState([])
  const [isPowered, setIsPowered] = useState(true)

  function changeDisplay(e) {
    if (isPowered && e.target.type === "submit") {
      setLastClicked(e.target.name)
    }
  }

  function switchPower() {
    setIsPowered(prevIsPowered => !prevIsPowered)
    setLastClicked("")
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
          {allDrums.map(item => <Drum key={item.keyStroke} keyStroke={item.keyStroke} sound={item.sound} name={item.name} isPowered={isPowered} />)}
        </div>
        <div className="optionsDiv">
          <label htmlFor="isPowered">Power switch
            <input id="isPowered" type="checkbox" checked={isPowered} onChange={switchPower} />
            </label>
          <div className="display">
            <p>{lastClicked}</p>
          </div>
          {/* TODO: volume-slider */}
          <button>Volume slider</button>
        </div>
      </div>
    </main>
  );
}

export default App;