import { alkotok } from "../Alkotok";
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Buszkesegeink() {
  const AlkotoCard = ({ nev, src, szak }) => (
    <Card style={{ width: '200px' }}>
    <Card.Img variant="top" src={src} alt="" />
    <Card.Body>
      <Card.Title>{nev}</Card.Title>
      <Card.Text>{szak}</Card.Text>
      <Link to={`/alkoto`}>
        <Button variant="primary">Részletek</Button>
      </Link>
    </Card.Body>
  </Card>
  );
  return (
    <div className="buszkesegek ">
      {alkotok.map((elem, index) => (
        <AlkotoCard
          key={index}
          nev={elem.nev}
          src={elem.src}
          szak={elem.szak}
          kattintas={() => console.log("katt")}
        />
      ))}
    </div>
  );
}
