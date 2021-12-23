import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = require('react-responsive-carousel').Carousel;

const thumbTo1080 = (url) => url.replace('thumb', '1080p');

const Screenshots = ({ screenshots }) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const images = screenshots.map((img) => 'https:' + thumbTo1080(img.url));

  const changeImage = (direction) => {
    if (direction === 'next') {
      if (currentScreenshot === images.length - 1) {
        setCurrentScreenshot(0);
      } else {
        setCurrentScreenshot(currentScreenshot + 1);
      }
    } else {
      if (currentScreenshot === 0) {
        setCurrentScreenshot(images.length - 1);
      } else {
        setCurrentScreenshot(currentScreenshot - 1);
      }
    }
  };

  return (
    <div className="mx-2">
      <div>
        <Image
          src={images[currentScreenshot]}
          alt="game screenshot"
          width={300}
          height={250}
        ></Image>
      </div>
      <div className="flex justify-between">
        <button onClick={() => changeImage('prev')}>Prev</button>
        <button onClick={() => changeImage('next')}>Next</button>
      </div>
    </div>
  );
};

export default Screenshots;
