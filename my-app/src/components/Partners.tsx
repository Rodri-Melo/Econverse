import React from "react";
import '../styles/Partners.scss';
import PartnersImg from '../images/Partners/parceiros.jpg'
import { CheckButton } from "./Common/CheckButton";

export const Partners: React.FC = () => {

  const handleConfiraClick = () => {
    console.log("Botão 'Confira' clicado!");
  };
  
  return (
    <div className="all-partners">
      <div className="partner1">
        <img className="partners-img" src={PartnersImg} alt="Parceiros"></img>
        <div className='partners-text'>
          <h2 className="part-title"> Parceiros </h2>
          <p className="part-desc2"> Lorem ipsum dolor sit <br></br> amet, consectetur </p>
          <CheckButton onClick={handleConfiraClick} />
        </div>
      </div>
      <div className="partner2">
        <img className="partners-img" src={PartnersImg} alt="Parceiros"></img>
        <div className='partners-text2'>
          <h2 className="part-title2"> Parceiros </h2>
          <p className="part-desc2"> Lorem ipsum dolor sit <br></br> amet, consectetur </p>
          <CheckButton onClick={handleConfiraClick} />
        </div>
      </div>
    </div>
  )
}