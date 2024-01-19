import './App.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fooldal from './pages/Fooldal';
import Alkoto from './pages/Alkoto';
import Csapat from './pages/Csapat';
import Layout from './LayOut';


function App() {
  return (
    <div>
      <header><h1>Arc Projekt</h1> </header>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Fooldal />} />
            <Route path="alkoto" element={<Alkoto />} />
            <Route path="csapat" element={<Csapat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;