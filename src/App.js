import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ComponentOne } from "./ComponentOne";
import { ComponentTwo } from "./ComponentTwo";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => navigate(`/other/${text}`)}>Other</button>
      <Routes>
        <Route path="" element={<ComponentOne />} />
        <Route path="other/:value/*" element={<ComponentTwo />} />
      </Routes>
    </div>
  );
}

export default App;
