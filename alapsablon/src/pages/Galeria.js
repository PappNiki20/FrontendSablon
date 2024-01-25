import React from 'react';

export default function KepGaleria(props) {
  return( 
    <div className="row galeria justify-content-center">
      {props.kepek.map((kep, index) => (
        <div key={index} className="col-4 col-md-4 col-lg-4 mb-3">
          <img
            src={kep.src}
            alt={`Kép ${index + 1}`}
            className="img-fluid galeria-kep"
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',  
              border: '2px solid #fff',  
              transition: 'transform 0.3s ease-in-out',  
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}  
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}  
          />
        </div>
      ))}
    </div>
  );
}
