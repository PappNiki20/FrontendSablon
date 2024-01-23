import React from 'react';

export default function KepGaleria(props) {
  return( 
    <div className="row galeria">
      {props.kepek.map((kep, index) => (
        <div className="col-md-4 col-sm-5 ">
        <img key={index} src={kep.src} alt={`Kép ${index + 1}`} className="img-thumbnail galeria-kep"    /></div>
      ))}
    </div>
  );
}

