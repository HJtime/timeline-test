import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Main from './components/main';
import Qna from "./components/qna";
import Result from "./components/result";
import './css/style.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/qna' element={<Qna/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;