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
        <Link to="/HardMode">
          <button>Hard Mode</button>
        </Link>
      </div>
      <div className="mode_btn">
        <Link to="/ExtremeMode">
          <button>Extreme Mode</button>
        </Link>
      </div>
    </div>
  );
}
export default FrontPage;
