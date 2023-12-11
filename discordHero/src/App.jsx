import "./App.css";
import background from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import icon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div id="logos">
        <img src={logo} alt="logo" className="logo" />
        <img src={icon} alt="icon" className="icon" />
      </div>
      <div className="mainText">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ..where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="buttons">
        <button id="whiteBtn">Download for Mac</button>
        <button id="blackBtn">Open Discord in your browser</button>
      </div>
      <img src={background} alt="backgroundImage" id="backgroundImage " />
    </div>
  );
}

export default App;
