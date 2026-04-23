import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeawardHouseWebsite from "./SeawardHouseWebsite";
import VenturaVideoProduction from "./VenturaVideoProduction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeawardHouseWebsite />} />
        <Route path="/ventura-video-production" element={<VenturaVideoProduction />} />
      </Routes>
    </BrowserRouter>
  );
}
