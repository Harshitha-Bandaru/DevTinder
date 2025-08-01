import { Routes, Route } from "react-router";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
