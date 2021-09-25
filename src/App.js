import "./App.css";
import Timer from "./components/Timer/Timer";
import DocumentTitle from "react-document-title";

function App() {
  return (
    <DocumentTitle title="Pomodorset">
      <div className="App">
        <header className="App-header">
          <Timer />
        </header>
      </div>
    </DocumentTitle>
  );
}

export default App;
