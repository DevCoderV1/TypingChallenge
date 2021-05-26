import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HardMode() {
  const Text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget purus massa. Ut pulvinar sapien eu leo feugiat accumsan. Mauris et laoreet nisl, id varius metus. Proin scelerisque justo risus, sed varius mi dapibus eu. Ut dapibus risus sapien, id fringilla ligula scelerisque a. Donec nibh urna, vestibulum et iaculis sit amet, pellentesque at eros. Quisque id facilisis turpis. Pellentesque neque nibh, sollicitudin scelerisque semper eget, dignissim eget nibh. Phasellus faucibus malesuada pharetra. Aliquam a lacinia diam. Cras eu mi vestibulum, malesuada massa ut, pellentesque orci. Aliquam non nunc lacus. Suspendisse a bibendum nulla. Sed non tempor erat.";
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
    const NewText = Text.split("");
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
          <h1>Hard Mode</h1>
        </div>
        <div className="menu_button">
          <Link to="/">
            <button>Back to Main Menu</button>
          </Link>
        </div>
      </div>
      <div className="displaytext">
        <p>{Text}</p>
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

export default HardMode;
