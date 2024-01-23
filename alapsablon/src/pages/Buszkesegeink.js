import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Buszkesegek.css";
import { alkotok } from "../Alkotok";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
export default function Buszkesegeink() {
  return (
    <div className=" row">
      {alkotok.map((elem, index) => {
        return (
          <div class="card col-md-6">
            <img src={elem.src} alt="" className="card-img-top h-150px" />
            <div class="card-body">
              <h4 class="card-title">{elem.nev}</h4>
              <h4 class="card-text">{"Szak: " + elem.szak}</h4>
            </div>
            <div class="card-footer">
              <a href="/alkoto" class="btn btn-primary">
                Megtekintés
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
