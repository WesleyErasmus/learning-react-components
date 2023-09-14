import { comments } from "./data/commentData";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
