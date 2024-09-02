import React, { useState } from 'react'
import { Product } from '../interfaces/Product'
import '../styles/ProductPopUp.scss'
import { GrClose } from 'react-icons/gr'
import add from '../images/sectionIcons/add.svg'
import min from '../images/sectionIcons/min.svg'

interface ProductPopupProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const ProductPopup: React.FC<ProductPopupProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="product-popup">
        <div className="popup-content">
          <div className="pop1">
            <img
              className="photo"
              src={product.photo}
              alt="imagem do produto"
            ></img>
          </div>

          <div className="pop2">
            <div className="popup-buttons">
              <button className="popup-btn-close" onClick={onClose}>
                <GrClose aria-label="Fechar" />
              </button>
            </div>
            <h2 className="popup-title">{product.productName}</h2>

            <p className="popup-price">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <p className="popup-description">{product.descriptionShort}</p>
            <p className="popup-details"> Veja mais detalhes do produto </p>
            <div className="popup-qtd">
              <button className="qtd-btn" onClick={decrement}>
                <img src={min} alt="icon-min"></img>
              </button>

              <span className="count">{count}</span>

              <button className="qtd-btn" onClick={increment}>
                <img src={add} alt="icon-add"></img>
              </button>
            </div>
            <button className="popup-btn-buy"> COMPRAR </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPopup
