import Carousel from 'react-bootstrap/Carousel';
import exampleCarouselImage from './gfc-logo-12@2x_transp.png';
import secondImg from './nostr_logo.png'
import thirdImg from './pr_map.png'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={exampleCarouselImage} alt="first slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Programming</h3>
          <p>Regular engagement in international
            GitFitCode Community.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={secondImg} alt="second slide" className="d-block w-100" />
      <Carousel.Caption>
          <h3>Nostr</h3>
          <p>Find me on Nostr by searching miggymofongo@miguelalmodo.com
            on any nostr client.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={thirdImg} alt="third slide" className="d-block w-100" />
      <Carousel.Caption>
          <h3>Puerto Rico</h3>
          <p>
            I'm a pirate in the Caribbean!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;