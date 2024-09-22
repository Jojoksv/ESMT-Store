import { useState, useEffect } from 'react';
import img1 from '../../assets/images/firstSection3.jpg';
import img2 from '../../assets/images/firstSection2.webp';
import img3 from '../../assets/images/firstSection1.webp';
import img4 from '../../assets/images/firstSection4.webp';
import img5 from '../../assets/images/firstSection5.webp';
import card1 from '../../assets/images/card7.png'
import card2 from '../../assets/images/card8.png'
import card3 from '../../assets/images/card9.png'
import card4 from '../../assets/images/card11.png'
import card5 from '../../assets/images/card10.png'
import card6 from '../../assets/images/card2.png'
import card7 from '../../assets/images/card3.png'
import card8 from '../../assets/images/card4.png'
import card9 from '../../assets/images/card6.png'
import card10 from '../../assets/images/card1.png'
import card11 from '../../assets/images/card5.png'
import { Link } from 'react-router-dom';

const images = [img1, img2, img5, img3, img4];
const sliderImages = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11];

function OverElements(props){
  const { div, title, span, button, ...rest } = props;
  const { bg, titleSize, titleColor, divbg, elementWidth, gap, top, divSize, buttonbg, buttonColor, buttonFontSize} = {...rest};

  return(
    <div className='over-element' style={{ background: bg, width: elementWidth, gap: gap, top: top}}>
      <div style={{backgroundColor: divbg, fontSize: divSize}}>{div}</div>
      <h1 style={{fontSize: titleSize, color: titleColor}}>{title}</h1>
      <span style={{ color: titleColor}}>{span}</span>
      <button style={{backgroundColor: buttonbg, color: buttonColor, fontSize: buttonFontSize}}>{button}</button>
    </div>
  )
}

const commonProps = {
  elementWidth: '70%',
  top: '12%',
  gap: '1rem',
  titleSize: '3em',
  titleColor: '#fff',
  divbg: 'transparent',
  divSize: '1.4em',
  buttonbg: '#fff',
  buttonColor: '#000',
  buttonFontSize: '1em',
};

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='first-section'>
          <div className='carousel'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel image ${index + 1}`}
                className={index === currentImageIndex ? 'active' : ''}
              />
            ))}
          </div>
          <OverElements
            bg="#ffffff38"
            button="Acheter"
            div="Meilleurs prix"
            title="Prix imbattables sur vos produits préférés"
            span="Achetez plus pour moins cher"
          />
          <div className='show-products'>
            <div className='left'>
              <OverElements
                {...commonProps}
                div="Offres spéciales"
                title="30 % de réduction"
                span="Sur une sélection de smartphones"
                button="Acheter"
              />
            </div>
            <div className='right'>
              <OverElements
                {...commonProps}
                div="Nouveau"
                title="Emportez votre musique partout"
                span="Meilleures marques de casques"
                button="Acheter"
              />
            </div>
          </div>
        </div>
        <div className='second-section'>
          <h1>Découvrez toutes nos dernières offres et innovations</h1>
          <div className='second-section-content'>
            <div className='second-section-header'>
              <Link className='action-link'>Voir toutes les offres</Link>
              <div className='second-section-navbar'>
                <Link className='action-link'>Pour vous</Link>
                <Link>Téléphone</Link>
                <Link>TV & Audio</Link>
                <Link>Vêtements</Link>
                <Link>Ordinateurs</Link>
              </div>
            </div>
            <div className='second-section-main'>
              <div className='best-product'></div>
              <div className='stiky-section'>
                <div className='product one'></div>
                <div className='product two'></div>
                <div className='product three'></div>
                <div className='product four'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='third-section'>
          <div className='third-section-content'>
            <div className='brand-words'>
              <h1>ESMT StoreTech</h1>
              La meilleure plateforme pour acheter les produits que vous aimez
            </div>
            <div className='slider'>
              <div className='slider-content'>
                {sliderImages.map((image, index) => (
                  // <div key={index}>
                    <img src={image} alt="" key={index} />
                  // {/* </div> */}
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
