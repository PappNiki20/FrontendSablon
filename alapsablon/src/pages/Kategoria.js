import { kategoriak } from "../KatLista";
import "../css/Alkoto.css";

export default function Kategoria() {
  return (
    <div className="summary-section">
      <div className="seged">
        <div className="kat">
        {kategoriak.map((elem, i) => {
          <p className="egyKategoria">{elem}</p>
        })}  
        </div>
      </div>
    </div>
  );
}
