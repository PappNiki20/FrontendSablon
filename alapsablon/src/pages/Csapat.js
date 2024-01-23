import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Csapat.css";
import { kepek } from "../KepLista";
import { Carousel, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import KepGaleria from "./Galeria";
export default function Csapat() {
  return (
    <div className="csapat">
      <div className="tarolo">
        <div className="nevek">
          <h3>Csapattagok</h3>
          <ul>
            <li>
              <Nav.Link as={Link} to="/alkoto">
                Zöldlomb Legolas - designer
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/alkoto">
                Zöldlomb Legolas - designer
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/alkoto">
                Zöldlomb Legolas - designer
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/alkoto">
                Zöldlomb Legolas - designer
              </Nav.Link>
            </li>
          </ul>
        </div>
        <div className="leiras">
          <h3>Csapatmunka bemutatása</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
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
        <div className="videok ">
          <div className="card">
            <iframe
              className="img-thumbnail"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="card">
            <iframe
              className="img-thumbnail"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
        <div className="kepgaleria container">
          <KepGaleria kepek={kepek} />
        </div>
      </div>
    </div>
  );
}
