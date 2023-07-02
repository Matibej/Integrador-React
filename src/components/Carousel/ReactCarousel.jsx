import Carousel from 'react-bootstrap/Carousel';
import { StyledCarousel } from './CarouselStyled';

function ReactCarousel() {
    

    return (
      <StyledCarousel >
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687810489/wallpaper1_o9ldyo.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Disfruta de nuestros nuevos productos</h3>
            <p>Te presentamos un gran catálogo de juegos a un buen precio.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687810743/wallpaper2_qjvpfx.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Te presentamos nuestra nueva oferta</h3>
            <p>Cada día encontrarás una nueva oferta solo para vos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687810909/wallpaper3_prprmk.webp"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Tus juegos favoritos solo aquí</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </StyledCarousel>
    );
  }
  
  export default ReactCarousel;