import "../css/Kozos.css";
import React from "react";
export default function Alkoto() {
  return (
    <div className="alkoto summary-section " style={{ padding: "20px" }}>
      <div className="cont">
        <header className="text-center">
          <h1>Zöldlomb Legolas</h1>
        </header>
       
          <div >
            <h2
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              Szak:
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              Grafikus
            </p>
            <h2
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              Projekt neve:
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              Újrahasznosított fólia-projekt
            </p>
            <h2
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              Kategória:
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              Újrahasznosítás
            </p>
            </div>
            <div className="">
              <img
                src="./kepek/legolas.jpg"
                alt="a kep alt-ja ha nem tolt be"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                className="img-fluid"
              />
            
          </div>
          <div className="col-md-6">
            <h3>Bemutatkozás</h3>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.1em",
                lineHeight: "1.5",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quam lacus, vulputate ac porta ac, vehicula pharetra enim. In
              ipsum felis, eleifend at erat in, volutpat condimentum dolor.
              Vivamus ac orci lobortis nisl cursus sollicitudin eu a sem.
              Integer tristique, lacus pellentesque fringilla porttitor, massa
              tellus semper odio, ac ultrices felis purus vitae tortor.
              Curabitur varius nisi arcu, at sollicitudin enim suscipit vitae.
              In hac habitasse platea dictumst. Phasellus ac ligula finibus,
              eleifend justo eget, dignissim risus. Aliquam sodales feugiat
              pellentesque. Aliquam pharetra eget lorem ac eleifend. Maecenas et
              purus eget erat convallis interdum. Proin placerat eros at arcu
              molestie egestas. Fusce volutpat justo justo, id convallis est
              sagittis at. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Mauris accumsan sapien
              porttitor convallis laoreet. Etiam rhoncus ligula ut lobortis
              maximus. Duis suscipit tellus eu fermentum rhoncus. Curabitur arcu
              nibh, cursus ac arcu egestas, suscipit pharetra arcu. Fusce id
              massa id augue hendrerit luctus eu nec risus.
            </p>
          </div>
        </div>
      </div>
   
  );
}
