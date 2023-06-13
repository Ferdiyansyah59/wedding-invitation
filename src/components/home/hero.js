import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Hero({ images }) {
  return (
    <div className='slide-container'>
      <Slide
        autoplay={true}
        arrows={false}
        transitionDuration={1000}
      >
        {images.map((slideImage, index) => (
          <div key={index}>
            <div
              className='h-screen w-screen, bg-center bg-cover flex items-center justify-center'
              style={{
                backgroundImage: `url(${slideImage})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Hero;
