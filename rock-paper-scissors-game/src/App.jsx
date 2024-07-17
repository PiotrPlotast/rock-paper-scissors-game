import "./App.css";
import Header from "./Header";
import RulesButton from "./RulesButton";
import Rules from "./Rules";
import Game from "./Game";
import { useState } from "react";
function App() {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div>
      {rulesOpen ? (
        <Rules />
      ) : (
        <div className="font-main pt-8 h-screen bg-[radial-gradient(169.40%_89.55%_at_50%_0%,rgba(31,55,87,1)_0%,rgba(19,21,55,1)_100%)]">
          <Header score={score} />
          <Game />
          <RulesButton setRulesOpen={setRulesOpen} />
        </div>
      )}
    </div>
  );
}
export default App;
