// Fooldal.js
import "../css/Fooldal.css";
import React from 'react';
import BgImageWithNavbar from '../BgImageWithNavbar';

const Fooldal = () => {
  return (
    <>
      <BgImageWithNavbar />
    <div>
      <div className="summary-section">
        <div className="summary-content">
          <div className="summary-text">
       <h1>Csapatok</h1>

            <p>
             
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="summary-image">
           
            <img src="kepek/bg2.jpg" alt="Kép leírása" style={{ maxWidth: '600px', width: '100%' }}/>
          </div>
        </div>

        <span></span>


        <div className="summary-content left">
        <div className="summary-text left">
     <h1>Alkotók</h1>

          <p>
           
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="summary-image left">
         
          <img src="kepek/bg3.jpg" alt="Kép leírása" style={{ maxWidth: '600px', width: '100%' }}/>
        </div>
      </div>
      
    <span></span>
      
      <div className="summary-content">
      <div className="summary-text">
   <h1>Projektek</h1>

        <p>
         
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="summary-image">
       
        <img src="kepek/bg.jpg" alt="Kép leírása" style={{ maxWidth: '600px', width: '100%' }}/>
      </div>
    </div>
      </div>
      </div>
    </>
  );
};

export default Fooldal;
