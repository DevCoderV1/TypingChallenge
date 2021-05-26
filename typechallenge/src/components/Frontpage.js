import { Link } from "react-router-dom";
import "./Frontpage.css";

function FrontPage() {
  return (
    <div className="frontpage_container">
      <div className="frontpage_title">
        <h1>Typing Challenge</h1>
      </div>
      <div className="mode_btn">
        <Link to="/EasyMode">
          <button>Easy Mode</button>
        </Link>
      </div>
      <div className="mode_btn">
        <Link to="/NormalMode">
          <button>Normal Mode</button>
        </Link>
      </div>
      <div className="mode_btn">
        <Link to="/HardMode">
          <button>Hard Mode</button>
        </Link>
      </div>
      <div className="mode_btn">
        <Link to="/">
          <button>Extreme Mode</button>
          <p style={{ color: "white", padding: "10px" }}>Coming Soon!!</p>
        </Link>
      </div>
    </div>
  );
}
export default FrontPage;
