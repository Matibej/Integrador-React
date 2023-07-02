import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export const StyledCarousel = styled(Carousel)`

display:flex;
width: 100%;
max-width: 1600px;


img{
    height: 550px;
}

@media (max-width: 900px) {
    img{
        height: 450px;
    }
}

@media (max-width: 700px) {
    img{
        height: 350px;
    }
}

@media (max-width: 500px) {
    font-size: 10px;
    h3{
        font-size: 15px;
    }
    img{
        height: 250px;
    }
}

`


