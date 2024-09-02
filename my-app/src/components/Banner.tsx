import React from 'react'
import '../styles/Banner.scss'
import BannerImage from '../images/BannerImage/Rectangle 250.jpg'

const Banner: React.FC = () => {
  return (
    <div className="all-banner">
      <img className="img" src={BannerImage} alt="Banner" />
      <div className="banner-text">
        <p className="white-text">
          Venha conhecer nossas <br></br> promoções
        </p>
      </div>
      <div className="banner-text2">
        <p className="white-text2"> 50% Off nos produtos </p>
      </div>
      <button className="banner-btn"> Ver produto </button>
    </div>
  )
}

export default Banner
