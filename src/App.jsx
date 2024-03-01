import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
