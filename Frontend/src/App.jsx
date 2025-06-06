import React from "react";
import { Routes, Route } from "react-router";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
