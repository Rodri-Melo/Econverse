import React from 'react'
import '../styles/Header.scss'
import shield from '../images/HeaderIcons/shield.svg'
import truck from '../images/HeaderIcons/truck.svg'
import creditCard from '../images/HeaderIcons/creditCard.svg'
import crown from '../images/HeaderIcons/crown.svg'
import vtexIcon from '../images/HeaderIcons/vtex.svg'
import search from '../images/HeaderIcons/search.svg'
import group from '../images/HeaderIcons/group.svg'
import heart from '../images/HeaderIcons/heart.svg'
import user from '../images/HeaderIcons/user.svg'
import cart from '../images/HeaderIcons/cart.svg'

const Header: React.FC = () => {
  return (
    <header className="all-header">
      <div className="rectangle1">
        <div className="items-space">
          <div className="items">
            <img src={shield} alt="shield" />
            <p className="header-text-top">
              <span className="gray-text">Compra</span>
              <span className="pink-text">100% segura</span>
            </p>
          </div>
          <div className="items">
            <img src={truck} alt="truck" />
            <p className="header-text-top">
              <span className="pink-text"> Frete grátis</span>
              <span className="gray-text">acima de R$ 200</span>
            </p>
          </div>
          <div className="items">
            <img src={creditCard} alt="creditCard" />
            <p className="header-text-top">
              <span className="pink-text"> Parcele </span>
              <span className="gray-text">suas compras</span>
            </p>
          </div>
        </div>
      </div>
      <div className="rectangle2">
        <img className="vtex-icon" src={vtexIcon} alt="vtexIcon" />
        <div className="search">
          <div className="search-container">
            <input
              className="search-text"
              type="text"
              placeholder="O que você está buscando?"
              aria-label="Campo de pesquisa"
            />
            <img className="search-icon" src={search} alt="search-icon" />
          </div>
        </div>
        <img className="icon" src={group} alt="group" />
        <img className="icon" src={heart} alt="heart" />
        <img className="icon" src={user} alt="userCircle" />
        <img className="icon" src={cart} alt="ShoppingCart" />
      </div>

      <div className="rectangle3">
        <p className="header-text-bot">
          <span className="gray-text-bot">TODAS CATEGORIAS</span>
          <span className="gray-text-bot">SUPERMERCADO</span>
          <span className="gray-text-bot">LIVROS</span>
          <span className="gray-text-bot">MODA</span>
          <span className="gray-text-bot">LANÇAMENTOS</span>
          <span className="pink-text-bot"> OFERTAS DO DIA </span>
          <span className="gray-text-bot-with-icon">
            <img className="ass-icon" src={crown} alt="crown" />
            <span className="ass-text">ASSINATURA </span>
          </span>
        </p>
      </div>
    </header>
  )
}

export default Header
