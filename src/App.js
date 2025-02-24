import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import RecipePage from './Components/RecipePage/RecipePage';
import Pages from './Components/Pages/Pages';
import Elements from './Components/Elements/Elements';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/elements" element={<Elements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
