import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import b1 from './images/bg4.jpg';
import b2 from './images/bg5.jpg';
import b3 from './images/bg6.avif';



function Slider() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={b1}/>
        <Carousel.Caption>
          <h3>Shop here</h3>
          <p>Get what you want in a single touch</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Pictureframe imageUrl={b2}/>
        <Carousel.Caption>
          <h3>shop here</h3>
          <p>Be smart with this shopping site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Pictureframe imageUrl={b3} />
        <Carousel.Caption style={{color:"black"}}> 
          <h3>Shop here</h3>
          <p>
           Be happy and satisfy with the things by getting into house
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;