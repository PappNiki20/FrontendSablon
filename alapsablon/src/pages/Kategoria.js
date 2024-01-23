import { Nav } from "react-bootstrap";
import { kategoriak } from "../KatLista";
import { Link, Outlet } from "react-router-dom";
import "../css/Kategoria.css";
import "../css/Kozos.css";

export default function Kategoria() {
  return (
    <div className="summary-section">
      <div className="seged">
        <div className="kat">
          <header>
            <h1>Kategóriák</h1>
          </header>
          <ul>
          {kategoriak.map((elem, i) => {
            return (
              <li className="egyKategoria p-3" key={i}>
              {elem.magyar}   
              -   
              {elem.magyarLeir}
                <Nav.Link as={Link} to="/csapat">
                   Tovább...
                </Nav.Link>
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}
