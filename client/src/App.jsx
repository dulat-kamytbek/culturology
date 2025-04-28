import { Routes, Route, Navigate } from "react-router-dom";
import Tribes from "./pages/Tribes";
import TribeDetail from "./pages/TribeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tribes" />} />
      <Route path="/tribes" element={<Tribes />} />
      <Route path="/tribes/:tribeId" element={<TribeDetail />} />
      <Route path="*" element={<Navigate to="/tribes" />} /> {/* Перехват неправильных адресов */}
    </Routes>
  );
}

export default App;
