import Drum from "./Components/Drum";
import sounds from "./data/sounds";
import React from "react";

function App() {

  const [lastClicked, setLastClicked] = React.useState("")

  //state?
  const keys = ["Q", "W", "E", "A", "S", "D", "Y", "X", "C"]

  //state?
  const allDrums = sounds.map((item, index) => {
    return {
      keyStroke: keys[index],
      sound: item.url,
      name: item.name
    }
  })

  function testFunc(e) {
    if (e.target.type === "submit") {
      setLastClicked(e.target.id)
    }
  }

  return (
    <main>
      <div id="drum-machine">
        <div className="drumDiv" onClick={testFunc}>
          {allDrums.map(item => <Drum key={item.keyStroke} keyStroke={item.keyStroke} sound={item.sound} name={item.name} />)}
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

