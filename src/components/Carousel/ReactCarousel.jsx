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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687810743/wallpaper2_qjvpfx.webp"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687810909/wallpaper3_prprmk.webp"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </StyledCarousel>
    );
  }
  
  export default ReactCarousel;