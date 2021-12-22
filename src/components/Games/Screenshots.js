import React from 'react';
import Image from 'next/image';

const thumbTo1080 = (url) => url.replace('thumb', '1080p');

const Screenshots = ({ screenshots }) => {
  const imageUrl = screenshots[0].url;

  const images = screenshots.map((img) => 'https:' + thumbTo1080(img.url));

  const arr = [1, 2, 3];

  return (
    <div className="SHIT">
      {/* {console.log(images)} */}

      {images.map((img, i) => {
        return (
          <Image src={img} alt={i} key={i} width={300} height={250}></Image>
        );
      })}

      {/* <Image
        src={'https://' + imageUrl}
        alt="asdf"
        width={300}
        height={250}
      ></Image> */}
    </div>
  );
};

export default Screenshots;
