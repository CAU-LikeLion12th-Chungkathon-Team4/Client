import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Join from './pages/join/Join';
import Font from './font/Font.js';
import ModalTestPage from './component/ModalTestPage';
import Mypage from './pages/mypage/Mypage';
import NutAdd from './pages/nutadd/NutAdd.jsx';
import Login from './pages/login/Login.jsx';

function App() {
  return (
    <>
    <Font/>
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/home/:urlRnd" element={<Home/>}/>
      <Route path = "/join" element={<Join/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/modaltest" element={<ModalTestPage/>}/>
      <Route path = "/mypage" element={<Mypage/>}/>
      <Route path = "/nutAdd" element={<NutAdd/>}/>
    </Routes>

    </>
  );
}

export default App;
