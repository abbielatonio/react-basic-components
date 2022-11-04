import App from "./App";

function Player(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.number}</p>
    </div>
  );
}

export default Player;
