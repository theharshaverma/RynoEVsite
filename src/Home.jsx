import { Carousel, CarouselItem, CarouselCaption, Image } from 'react-bootstrap';  
import { TypeAnimation } from 'react-type-animation';
import red from './Delicate.jpg';
import black from './black.png';
import blue from './blue.png';
import redd from './red.png';
import golden from './golden.png';
import Button from 'react-bootstrap/Button';

export default function Home(){
    return <div>

<div>
    <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'Lets Elevate Your Ride Experience With Rhyno- Where Superiority Meets Style', // initially rendered starting point
      1000,
      'Lets Elevate Your Ride Experience With Rhyno- Where Superiority Meets Elegance',
      1000,
      'Lets Elevate Your Ride Experience With Rhyno- Where Superiority Meets Minimalism',
      1000,
      'Lets Elevate Your Ride Experience With Rhyno- Where Superiority Meets Comfort',
      500,
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
    />
   </div>

      <Carousel controls indicators dark> {/* corrected component name */}
        <Carousel.Item> {/* corrected component name */}
        <Image className="d-block w-100" src={black} alt="slide 1" /> 
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={blue} alt="slide 2" /> {/* corrected component name */}
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={redd} alt="slide 3" /> {/* corrected component name */}
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={golden} alt="slide 2" /> {/* corrected component name */}
        </Carousel.Item>
      </Carousel> {/* corrected component name */}

      <br></br>
      <Button>CheckOut</Button>
      <br></br>

      <Carousel controls indicators dark> {/* corrected component name */}
        <Carousel.Item> {/* corrected component name */}
        <Image className="d-block w-100" src={red} alt="slide 1" style={{width: '500px', height: '400px'}} /> 
          <Carousel.Caption style={{ color: 'black', fontWeight:"bold" }}> {/* corrected component name */}
            <h5 >RhynoEV</h5>
            <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={red} alt="slide 2" style={{width: '500px', height: '400px'}}/> {/* corrected component name */}
          <Carousel.Caption style={{ color: 'black', fontWeight:"bold"}}> {/* corrected component name */}
            <h5>Wider tyres</h5>
            <p>Now, say goodbye to skidding and embrace the leaning turns!Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={red} alt="slide 3" style={{ width: '500px', height: '400px'}}/> {/* corrected component name */}
          <Carousel.Caption style={{ color: 'black', fontWeight:"bold"}}> {/* corrected component name */}
            <h5>Range prediction</h5>
            <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={red} alt="slide 2" style={{width: '500px', height: '400px'}}/> {/* corrected component name */}
          <Carousel.Caption style={{ color: 'black', fontWeight:"bold"}}> {/* corrected component name */}
            <h5>Extraordinery Experience</h5>
            <p> Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item> {/* corrected component name */}
          <Image className="d-block w-100" src={red} alt="slide 2" style={{width: '500px', height: '400px'}}/> {/* corrected component name */}
          <Carousel.Caption style={{ color: 'black', fontWeight:"bold"}}> {/* corrected component name */}
            <h5>Rugged and simple Design</h5>
            <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!</p>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel> {/* corrected component name */}

      <br></br>
      <Button>PreBook Now!</Button>

    </div>
}