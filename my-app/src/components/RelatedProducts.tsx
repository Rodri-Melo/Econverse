import React from "react";
import '../styles/RelatedProducts.scss';
import PartnersImg from '../images/Partners/parceiros.jpg';
import { CheckButton } from "./Common/CheckButton";
import { TitleRelated } from "./Common/TitleRelated";
import vtexIcon from '../images/HeaderIcons/vtex.svg'

export const RelatedProducts: React.FC = () => {

  const handleConfiraClick = () => {
    console.log("Botão 'Confira' clicado!");
  };

  return (
    <>
      <div className="titles">
        <TitleRelated />
        <h2 className="btn-all"> Ver todos </h2>
      </div>

      <div className="all-related-products ">
        <div className="RelatedProducts1">
          <img className="products-img" src={PartnersImg} alt="Parceiros"></img>
          <div className='related-text1'>
            <h2 className="part-title"> Produtos </h2>
            <p className="part-desc2"> Lorem ipsum dolor sit <br></br> amet, consectetur </p>
            <CheckButton onClick={handleConfiraClick} />
          </div>
        </div>
        <div className="RelatedProducts2">
          <img className="products-img" src={PartnersImg} alt="Parceiros"></img>
          <div className='related-text2'>
            <h2 className="part-title2"> Produtos </h2>
            <p className="part-desc2"> Lorem ipsum dolor sit <br></br> amet, consectetur </p>
            <CheckButton onClick={handleConfiraClick} />
          </div>
        </div>
      </div>

      <div className="all-brand">
        <h2 className="brand"> Navegue por marcas </h2>
        <div className="brand-container">
          <div className="brand-icons">
            <img className='brand-icon' src={vtexIcon} alt='vtexIcon' />
          </div>
          <div className="brand-icons">
            <img className='brand-icon' src={vtexIcon} alt='vtexIcon' />
          </div>
          <div className="brand-icons">
            <img className='brand-icon' src={vtexIcon} alt='vtexIcon' />
          </div>
          <div className="brand-icons">
            <img className='brand-icon' src={vtexIcon} alt='vtexIcon' />
          </div>
          <div className="brand-icons">
            <img className='brand-icon' src={vtexIcon} alt='vtexIcon' />
          </div>
        </div>
      </div>
    </>
  )
}
