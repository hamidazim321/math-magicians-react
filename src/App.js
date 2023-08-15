import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
