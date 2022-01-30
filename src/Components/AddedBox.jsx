import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function AddedBox({uploadImages,removeCard}) {
  return <div>
    <Carousel className="swiper added-box" responsive={responsive}>
          {uploadImages.map((elem, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <img src={elem.img} alt="" />
                  <button className='remove-btn' onClick={()=>{removeCard(index)}}>X</button>
                </div>
                <h3>{elem.title}</h3>
              </div>
            );
          })}
        </Carousel>
  </div>;
}
