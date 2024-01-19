import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Csapat.css";
import { kepek } from "../KepLista";
import { Carousel } from "react-bootstrap";
export default function Csapat() {
  return (
    <div className="csapat">
      <div className="nevek">
        <ul>
          <li>
            <a href="#">Kovács Anna</a>
          </li>
          <li>
            <a href="#">Varga János</a>
          </li>
          <li>
            <a href="#">Nagy Eszter</a>
          </li>
          <li>
            <a href="#">Szabó Péter</a>
          </li>
          <li>
            <a href="#">Horváth Gabriella</a>
          </li>
          <li>
            <a href="#">Tóth Gábor</a>
          </li>
        </ul>
      </div>
      <div className="leiras">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br/>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum<br/>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className=" galeria container mt-5">
        <Carousel>
          {kepek.map((kep) => (
            <Carousel.Item key={kep.id}>
              <img className="d-block w-100" src={kep.src} alt={kep.cim} />
              <Carousel.Caption>
                <h5>{kep.leiras}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="videok">
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
    </div>
  );
}
