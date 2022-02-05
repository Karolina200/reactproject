import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  async function handleClick(value) {
    navigate("../" + value, { replace: true });
  }

  return (
    <div className="navbarMenu col-12">
      <ul className="col-12">
        <li className="col-3" onClick={() => handleClick("")}>
          <h6>Home</h6>
        </li>
        <li className="col-3" onClick={() => handleClick("article")}>
          <h6>Article</h6>
        </li>
        <li className="col-3" onClick={() => handleClick("video")}>
          <h6>Video</h6>
        </li>
        <li className="col-3" onClick={() => handleClick("photo")}>
          <h6>Photo</h6>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
