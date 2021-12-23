import React, { useState } from 'react';
import Image from 'next/image';

const thumbTo1080 = (url) => url.replace('thumb', '1080p');

const Artwork = ({ artworks }) => {
  const [currentArtwork, setCurrentArtwork] = useState(0);

  const images = artworks.map((img) => 'https:' + thumbTo1080(img.url));

  const changeImage = (direction) => {
    if (direction === 'next') {
      if (currentArtwork === images.length - 1) {
        setCurrentArtwork(0);
      } else {
        setCurrentArtwork(currentArtwork + 1);
      }
    } else {
      if (currentArtwork === 0) {
        setCurrentArtwork(images.length - 1);
      } else {
        setCurrentArtwork(currentArtwork - 1);
      }
    }
  };

  return (
    <div className="mx-2">
      <div>
        <Image
          src={images[currentArtwork]}
          alt="game art"
          width={600}
          height={500}
        ></Image>
      </div>
      <div className="flex justify-between">
        <button onClick={() => changeImage('prev')}>Prev</button>
        <button onClick={() => changeImage('next')}>Next</button>
      </div>
    </div>
  );
};

export default Artwork;
