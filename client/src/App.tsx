import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-1 items-center justify-center border-black border-solid border-2">
      <h1 className="text-5xl font-bold underline">Container Homes</h1>
    </div>
  );
}

export default App;
