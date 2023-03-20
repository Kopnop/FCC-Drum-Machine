import Drum from "./Components/Drum";
import sounds from "./data/sounds";
import { useState, useEffect } from "react";

function App() {

  const [lastClicked, setLastClicked] = useState("")

  //state?
  const allDrums = sounds.map((item, index) => {
    return {
      keyStroke: item.key,
      sound: item.url,
      name: item.name
    }
  })

  function changeDisplay(e) {
    if (e.target.type === "submit") {
      setLastClicked(e.target.name)
    }
  }

  function handleKeyPress(e) {
    document.getElementById(e.code).click()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return function cleanup() {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <main>
      <div id="drum-machine">
        <div className="drumDiv" onClick={changeDisplay}>
          {allDrums.map(item => <Drum id={`Key${item.keyStroke}`} key={item.keyStroke} keyStroke={item.keyStroke} sound={item.sound} name={item.name} />)}
        </div>
        <div className="optionsDiv">
          {/* TODO: powerbutton */}
          <button>Power</button>
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

//onKeyDown={(e) => handleKeyPress(e, item.keyStroke)}
