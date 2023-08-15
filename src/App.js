import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="Front">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
