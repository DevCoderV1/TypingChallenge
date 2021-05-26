import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EasyMode() {
  const easyText =
    "When the skies and the grounds were one, the legends, through their twelve forces, nurtured the tree of life. An eye of red force created the evil which coveted the heart of tree of life, and the heart slowly grew dry. To tend and embrace the heart of tree of life, the legends hereby divide the tree in half and hide each side. Hence, time is over-turned and space turns askew. The twelve forces divide into two and create two suns that look alike into two worlds that seem alike. The legends travel apart. The legends shall now see the same sky but shall stand on different grounds, shall stand on the same ground but shall see different skies. The day the grounds be kept a single file before one sky in two worlds that seem alike, the legends will greet each other. The day the red force is purified, the twelve forces will reunite into one perfect root, a new world shall open up.";
  const [mytext, SetText] = useState("");
  const [time, settime] = useState(0);
  const [hide, sethide] = useState(true);
  const [status, setStatus] = useState(false);
  const [message, setmessage] = useState("");

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
    const NewText = easyText.split("");
    const userText = mytext.split("");
    let count = 0;
    sethide(false);
    for (let x = 0; x < NewText.length; x++) {
      if (userText[x] === NewText[x]) {
        count = count + 1;
      }
    }
    setmessage(
      `Your time: ${time} seconds. You have ${count} out of ${NewText.length} character correct !`
    );
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
          <h1>Easy Mode</h1>
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

export default EasyMode;
