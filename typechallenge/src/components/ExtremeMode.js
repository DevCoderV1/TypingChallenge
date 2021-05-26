import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ExtremeMode() {
  const Text =
    "Duis id mi id velit vestibulum cursus. Integer tincidunt nisi felis, eu consectetur nulla dignissim id. Quisque gravida  condimentum egestas. Sed ex magna, fringilla vitae orci a, egestas elementum erat. Vestibulum @!semper imper^diet mi, vel (laoreet) libero semper eget. Mauris  sit   amet feugiat diam. Vivamus sed mattis ipsum. Aliquam venenatis efficitur? leo, et placerat ligula lacinia non!. Nam tristique tortor eu arcu  interdum  auctor.";
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
    sethide(false);
    let count = 0;
    for (let x = 0; x < NewText.length; x++) {
      if (userText[x] === NewText[x]) {
        count = count + 1;
      }
    }
    setmessage(
      `Your time: ${time} seconds. You have ${count} out of ${NewText.length} character correct !`
    );
  };
  //DisplayInput

  const DisplayInput = (e) => {
    SetText(e.target.value);
    setStatus(true);
  };
  //refresh the web browser
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
          <h1>Extreme Mode</h1>
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
        <input
          onChange={DisplayInput}
          type="text"
          autoFocus
          placeholder="Type here to begin..."
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

export default ExtremeMode;
