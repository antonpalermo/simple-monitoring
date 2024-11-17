import { useState } from "react";

function App() {
  const [data, setData] = useState(undefined);

  async function ping() {
    const request = await fetch("http://localhost:3559/ping");
    setData(await request.json());
  }

  return (
    <div>
      Ping Data: {JSON.stringify(data)}
      <button onClick={ping}>Increment</button>
    </div>
  );
}

export default App;
