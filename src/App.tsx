import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import EstimateForm from "./routes/EstimateForm";
import Navigation from "./componants/Navigation";

const App: React.FC = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/estimate-form" element={<EstimateForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
