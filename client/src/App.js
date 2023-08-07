import { useState } from "react";
import './App.css';

function App() {
  const [response, setResponse] = useState("Click button above to see response.");

  const BASE_URL = "http://localhost:5000";

  const handleButtonClick = async () => {
    let data = await fetch(`${BASE_URL}`).then(res => res.json());
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div className="App">
      <h1>CodeSandbox - React + Express demo</h1>
      <p>
        Click the button below to see the server response.
        <br />
        <br />
        <button onClick={handleButtonClick}>Click me!</button>
        <br />
        <br />
        <pre>{response}</pre>
      </p>
    </div>
  );
}

export default App;
