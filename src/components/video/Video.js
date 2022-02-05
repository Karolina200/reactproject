import "./Video.css";
import ReactPlayer from "react-player/lazy";

function startVideo(value) {
  alert("Video title: " + value);
}

function downloading(value) {
  alert("Downloading video");
}


function Video() {
  return (
    <div className="Video col-12">
      <ReactPlayer
        url="https://www.youtube.com/embed/tgbNymZ7vqY" volume={0.5}
        onPlay={() => startVideo(" Funny video")}
        onProgress={downloading}
      />
    </div>
  );
}

export default Video;
