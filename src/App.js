import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Join from "./pages/join/Join";
import Font from "./font/Font.js";
import ModalTestPage from "./component/ModalTestPage";
import Mypage from "./pages/mypage/Mypage";
import NutAdd from "./pages/nutadd/NutAdd.jsx";
import { RecoilRoot } from "recoil";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <RecoilRoot>
      <Font />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/:urlRnd" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/modaltest" element={<ModalTestPage />} />
        <Route path="/mypage/:urlRnd" element={<Mypage />} />
        <Route path="/gift/:urlRnd" element={<NutAdd />} />
      </Routes>

    </>
  );
}

export default App;
