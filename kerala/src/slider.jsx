import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import bg1 from './image/bg1.jfif';
import bg2 from './image/bg2.webp';
import bg3 from './image/bg3.jpg';



function Slider() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1}/>
        <Carousel.Caption>
          <h3>backwaters</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Pictureframe imageUrl={bg2}/>
        <Carousel.Caption>
          <h3>beach</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Pictureframe imageUrl={bg3} />
        <Carousel.Caption>
          <h3>mountains</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;