import React, { useState } from 'react'
import '../styles/MainContent.scss'
import technology from '../images/sectionIcons/technology.svg'
import supermarket from '../images/sectionIcons/supermarket.svg'
import drinks from '../images/sectionIcons/drinks.svg'
import health from '../images/sectionIcons/health.svg'
import tools from '../images/sectionIcons/tools.svg'
import fitness from '../images/sectionIcons/fitness.svg'
import fashion from '../images/sectionIcons/fashion.svg'
import prev from '../images/sectionIcons/prev.svg'
import next from '../images/sectionIcons/next.svg'
import { Product } from '../interfaces/Product'
import { TitleRelated } from './Common/TitleRelated'
import ProductPopup from './ProductPopup'
import { products } from '../data/Product'

export const MainContent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 4
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null)

  const nextSlide = () => {
    const next = currentSlide + 1
    if (next <= products.length - itemsPerSlide) {
      setCurrentSlide(next)
    }
  }

  const prevSlide = () => {
    const prev = currentSlide - 1
    if (prev >= 0) {
      setCurrentSlide(prev)
    }
  }

  const openPopup = (product: Product) => {
    if (product) {
      setCurrentProduct(product)
      setIsModalOpen(true)
    }
  }

  const closePopup = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="all-content">
      <div className="sections">
        <article className="section-icon">
          <img className="icon-img" src={technology} alt="tecnology"></img>
          <div className="section-text-pink">
            <p className="text"> Tecnologia</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={supermarket} alt="supermarket"></img>
          <div className="section-text-black">
            <p className="text"> Supermercado</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={drinks} alt="drinks"></img>
          <div className="section-text-black">
            <p className="text"> Bebidas</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={tools} alt="tools"></img>
          <div className="section-text-black">
            <p className="text"> Ferramentas</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={health} alt="health"></img>
          <div className="section-text-black">
            <p className="text"> Saúde</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={fitness} alt="fitness"></img>
          <div className="section-text-black">
            <p className="text"> Esportes e Fitness</p>
          </div>
        </article>
        <article className="section-icon">
          <img className="icon-img" src={fashion} alt="fashion"></img>
          <div className="section-text-black">
            <p className="text"> Moda</p>
          </div>
        </article>
      </div>
      <TitleRelated />
      <div className="products-title">
        <button className="products-options-pink">CELULAR</button>
        <button className="products-options">ACESSÓRIOS</button>
        <button className="products-options">TABLETS</button>
        <button className="products-options">NOTEBOOKS</button>
        <button className="products-options">TVS</button>
        <button className="products-options">VER TODOS</button>
      </div>

      <div className="all-product-content">
        <button className="previous-btn" onClick={prevSlide}>
          <img src={prev} alt="botão para o item anterior" />
        </button>

        <div className="products-list">
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * (310 + 20)}px)`,
              }}
            >
              {products.map((product, index) => (
                <div key={index} className="carousel-item">
                  <img
                    className="product-img"
                    src={product.photo}
                    alt={product.productName}
                  />
                  <p className="product-name">{product.productName}</p>
                  <p className="product-old-price">
                    {(product.price * 1.1).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                  <p className="product-price">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>

                  <p className="product-parcel">
                    ou 2x de{' '}
                    {(product.price / 2).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                    &nbsp;sem juros
                  </p>

                  <button
                    className="btn-buy"
                    onClick={() => openPopup(product)}
                  >
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="next-btn" onClick={nextSlide}>
          <img src={next} alt="botão para o próximo item" />
        </button>
      </div>

      {isModalOpen && currentProduct && (
        <ProductPopup
          product={currentProduct}
          onClose={closePopup}
          isOpen={isModalOpen}
        />
      )}
    </main>
  )
}
