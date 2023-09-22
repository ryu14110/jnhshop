import React,{useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [authenticate, setAuthenticate] = useState(false) // true->로그인 됨,false->안됨
  useEffect(()=>{
    // console.log("AAAA",authenticate);
  },[authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
