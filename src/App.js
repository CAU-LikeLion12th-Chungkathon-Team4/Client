import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Join from './pages/join/Join';
import Font from './font/Font.js';

function App() {
  return (
    <>
    <Font/>
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/join" element={<Join/>}/>
    </Routes>

    </>
  );
}

export default App;
