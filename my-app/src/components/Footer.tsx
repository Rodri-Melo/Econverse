import React from 'react';
import '../styles/Footer.scss';
import DoubleIcon from '../images/FooterIcons/double.svg'
import facebook from '../images/FooterIcons/facebook.svg'
import insta from '../images/FooterIcons/insta.svg'
import youtube from '../images/FooterIcons/youtube.svg'
import paymentIcons from '../images/FooterIcons/paymentIcons.svg'

export const Footer: React.FC = () => {
  return (
    <div className='all-footer'>
      <div className='footer1'>
        <div className='about-us'>
          <h3 className='f-title'> Sobre nós </h3>
          <p className='f-text'>CONHEÇA</p>
          <p className='f-text'>COMO COMPRAR </p>
          <p className='f-text'>INDICAÇÃO E DESCONTO </p>
          <img className='about-us-icons' src={facebook} alt="facebook" />
          <img className='about-us-icons' src={insta} alt="instagram" />
          <img className='about-us-icons' src={youtube} alt="youtube" />
        </div>

        <div className='infos'>
          <h3 className='f-title'> INFORMAÇÕES ÚTEIS </h3>
          <p className='f-text'>FALE CONOSCO</p>
          <p className='f-text'>DÚVIDAS</p>
          <p className='f-text'>PRAZOS DE ENTREGA</p>
          <p className='f-text'>FORMAS DE PAGAMENTO</p>
          <p className='f-text'>POLÍTICA DE PRIVACIDADE</p>
          <p className='f-text'>TROCAS E DEVOLUÇÕES</p>
        </div>

        <div className='payment'>
          <h3 className='f-title'> FORMAS DE PAGAMENTO </h3>
          <div className='payment-icons'>
            <img className='payment-icons ' src={paymentIcons} alt="youtube" />
          </div>
        </div>

        <div className='promotions'>
          <h4 className='promotion-text'>
            Cadastre-se e Receba nossas
            <strong> novidades e promoções</strong>
          </h4>
          <p className='promotion-text-desc'>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
          </p>
          <div>
            <input className='promotion-input' type='text' placeholder='SEU E-MAIL'></input>
            <button className='promotion-btn'>OK</button>
          </div>
        </div>
      </div>

      <div className='footer2'>
        <p className='f-text2'>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </p>
        <img className='double' src={DoubleIcon} alt="double icons" />
      </div>
    </div>

  )
}