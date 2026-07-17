import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Matchmaking from "./pages/Matchmaking";
import Credentials from "./pages/Credentials";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import MyAccount from "./pages/MyAccount";
import ChallengeDetails from "./pages/ChallengeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/team" element={<Team />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/challenges/:id" element={<ChallengeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;