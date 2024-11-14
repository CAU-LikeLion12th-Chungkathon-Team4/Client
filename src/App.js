import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Join from './pages/join/Join';
import Font from './font/Font.js';
import ModalTestPage from './component/ModalTestPage';
import Mypage from './pages/mypage/Mypage';

function App() {
  return (
    <>
    <Font/>
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/join" element={<Join/>}/>
      <Route path = "/modaltest" element={<ModalTestPage/>}/>
      <Route path = "/mypage" element={<Mypage/>}/>
    </Routes>

    </>
  );
}

export default App;
