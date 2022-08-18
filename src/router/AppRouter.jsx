import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../pages/GamePage";
import WelcomePage from "../pages/WelcomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
