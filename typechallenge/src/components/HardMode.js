import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HardMode() {
  const easyText = "Please";
  const [mytext, SetText] = useState("");
  const [time, settime] = useState(0);
  const [hide, sethide] = useState(true);
  const NewText = easyText.split("");
  const userText = mytext.split("");
  const [status, setStatus] = useState(false);
  const [message, setmessage] = useState("hello");

  //runs the timer
  useEffect(() => {
    if (status) {
      setInterval(() => {
        settime((time) => time + 1);
      }, 1000);
    } else {
    }
  }, [status]);

  //check if text is valid and same as displaytext
  const checktext = () => {
    let count = 0;
    sethide(false);
    if (userText.length !== NewText.length) {
      console.log("false");
    } else if (userText.length === NewText.length) {
      for (let x = 0; x <= NewText.length; x++) {
        if (userText[x] === NewText[x]) {
          count = count + 1;
          console.log("true");
        } else {
          console.log("false");
        }
      }
    }
    setmessage(`You have ${count} / ${NewText.length} text correct`);
  };
  const restartapp = () => {
    window.location.reload();
  };

  const show = {
    display: "block",
  };

  const noshow = {
    display: "none",
  };

  return (
    <div className="game_mode">
      <div className="nav_bar">
        <div className="game_title">
          <h1>Hard Mode</h1>
        </div>
        <div className="menu_button">
          <Link to="/">
            <button>Back to Main Menu</button>
          </Link>
        </div>
      </div>
      <div className="displaytext">
        <p>{easyText}</p>
      </div>
      <div className="result">
        <div className={hide ? "timer" : "hidetime"}>{time}</div>
        <div className={hide ? "hideboard" : "scoreboard"}>{message}</div>
      </div>
      <div className="user_input">
        <textarea
          onChange={(e) => {
            SetText(e.target.value);
            console.log(mytext);
            setStatus(true);
          }}
          type="text"
          autoFocus
          name="myinput"
          placeholder="Type your text here..."
        />
      </div>
      <div className="submit_btn">
        <button style={hide ? show : noshow} onClick={checktext}>
          Submit Text
        </button>
        <button style={hide ? noshow : show} onClick={restartapp}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default HardMode;
