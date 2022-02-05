import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  async function handleClick(value) {
    navigate("../" + value, { replace: true });
  }

  return (
    <div className="col-12" onClick={() => handleClick("")}>
      <img className="logo" src="logo192.png"></img>
    </div>
  );
}

export default Header;
