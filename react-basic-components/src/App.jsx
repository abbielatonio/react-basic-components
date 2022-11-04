import "./App.css";
import Player from "./Player";

function App() {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.number} name={player.name} number={player.number} />
      ))}
    </div>
  );
}

const players = [
  {
    name: "Jordan",
    number: "23",
  },
  {
    name: "James",
    number: " 23",
  },
  {
    name: "Bryant",
    number: "24",
  },
];

export default App;
