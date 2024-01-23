import { Nav } from "react-bootstrap";
import { kategoriak } from "../KatLista";
import { Link, Outlet } from "react-router-dom";
import "../css/Kategoria.css";
import "../css/Kozos.css";
/* import NyelvValtas from "./NyelvValtas"; */
/* import { useState } from "react"; */
import { useLanguage } from "./NyelvSegedlet";

export default function Kategoria() {
  /*   const [selectedLanguage, setSelectedLanguage] = useState("hu");

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    // Itt lehet implementálni a nyelvváltáshoz szükséges logikát
    // Például: frissíteni a kategoriak listát a kiválasztott nyelvnek megfelelően
  }; */

  //ÚJ
  const { selectedLanguage } = useLanguage();

  return (
    <div className="summary-section">
      {/* <NyelvValtas kivalasztottNyelv={handleLanguageChange} /> */}
      <div className="seged">
        <div className="kat">
          <header>
            <h1>{selectedLanguage === "hu" ? "Kategóriák" : "Categories"}</h1>
          </header>

          <ul>
            {kategoriak.map((elem, i) => {
              return (
                <li className="egyKategoria p-3" key={i}>
                  {/* <div style={{ whiteSpace: "pre-wrap"}}> */}
                    {selectedLanguage === "hu" ? elem.magyar : elem.angol}
                    {/* <br></br> */}
                    {selectedLanguage === "hu"
                      ? elem.magyarLeir
                      : elem.angolLeir}
                  {/* </div> */}
                  <Nav.Link as={Link} to="/csapat">
                    <pre />{" "}
                    {selectedLanguage === "hu" ? "Tovább..." : "More..."}
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
