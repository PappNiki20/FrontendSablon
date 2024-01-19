import "../css/Alkoto.css";
export default function Alkoto() {
  return (
    <div className="alkoto">
      <header>
        <h1>Alkotóink</h1>
      </header>
      <div className="egyAlkoto">
        <div className="felsoresz">
          <div className="adatok">
            <h3>Név: Zöldlomb Legolas</h3>
            <h4>Szak: Grafikus</h4>
            <h4>Projekt neve: Újrahasznosított fólia-projekt</h4>
            <h4>Kategória: Újrahasznosítás</h4>
          </div>
          <div className="alkotokep">
            <img
              src="./kepek/legolas.jpg"
              alt="a kep alt-ja ha nem tolt be"
              className="kep"
            />
          </div>
        </div>
        <div className="alkBemutat">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam
            lacus, vulputate ac porta ac, vehicula pharetra enim. In ipsum
            felis, eleifend at erat in, volutpat condimentum dolor. Vivamus ac
            orci lobortis nisl cursus sollicitudin eu a sem. Integer tristique,
            lacus pellentesque fringilla porttitor, massa tellus semper odio, ac
            ultrices felis purus vitae tortor. Curabitur varius nisi arcu, at
            sollicitudin enim suscipit vitae. In hac habitasse platea dictumst.
            Phasellus ac ligula finibus, eleifend justo eget, dignissim risus.
            Aliquam sodales feugiat pellentesque. Aliquam pharetra eget lorem ac
            eleifend. Maecenas et purus eget erat convallis interdum. Proin
            placerat eros at arcu molestie egestas. Fusce volutpat justo justo,
            id convallis est sagittis at. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            accumsan sapien porttitor convallis laoreet. Etiam rhoncus ligula ut
            lobortis maximus. Duis suscipit tellus eu fermentum rhoncus.
            Curabitur arcu nibh, cursus ac arcu egestas, suscipit pharetra arcu.
            Fusce id massa id augue hendrerit luctus eu nec risus.
          </p>
        </div>
      </div>
    </div>
  );
}
