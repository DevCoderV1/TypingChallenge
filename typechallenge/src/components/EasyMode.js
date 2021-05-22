import { useState } from "react";
import { Link } from "react-router-dom";
function EasyMode() {
  const [mytext, setmytext] = useState("");
  const easyText = "Please type the text shown here";

  //Frontend Display
  return (
    <div className="game_mode">
      <div className="game_title">
        <h1>Easy Mode</h1>
      </div>
      <div className="displaytext">
        <p>{easyText}</p>
      </div>
      <div className="menu_button">
        <Link to="/">
          <button>Main Menu</button>
        </Link>
      </div>
      <div className="user_input">
        <input
          onChange={(e) => {
            setmytext(e.target.value);
            console.log(mytext);
          }}
          type="text"
          name="myinput"
        />
      </div>
    </div>
  );
}

export default EasyMode;
