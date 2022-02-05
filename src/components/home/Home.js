import "./Home.css";

function handleResize() {
  console.log(document.getElementById("component").offsetWidth);
}
function selectFunc() {
  console.log("Typing!");
}

function keyDown() {
  console.log("Key down");
}

function keyUp() {
  console.log("Key up");
}
function Home() {
  window.addEventListener("resize", handleResize);
  return (
    <div className="col-12" id="component">
      Select some of the text:
      <input type="text" onInput={selectFunc} onKeyDown={keyDown}  onKeyUp={keyUp} />
    </div>
  );
}

export default Home;
