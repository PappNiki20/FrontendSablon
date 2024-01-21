import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './LayOut';
import Fooldal from './pages/Fooldal';
import Alkoto from './pages/Alkoto';
import Csapat from './pages/Csapat';

function App() {
  return (
    <div className='menu'>
      <header><h1>Arc Projekt</h1></header>
    <div className='feljebb'>
      <BrowserRouter >
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Fooldal />} />
            <Route path="alkoto" element={<Alkoto />} />
            <Route path="csapat" element={<Csapat />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
