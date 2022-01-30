import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AddedBox from './AddedBox';

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

export default function Main({ uploadImages, removeCard }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('electronics');
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [category]);

  return (
    <div className="main">
      <div className="categories-container">
        <div className="categories">
          {categories.map((elem, index) => {
            return (
              <button
                key={index}
                className={elem === category ? 'active btn' : 'btn'}
                onClick={() => {
                  setCategory(elem);
                }}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="slider-container">
        <Carousel className="swiper" responsive={responsive}>
          {products.map((prod, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <img src={prod.image} alt="" />
                </div>
                <h3>{prod.title}</h3>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
      <h2 className='cards-title'>Your Cards</h2>
      <div className="slider-container">
        <AddedBox removeCard={removeCard} uploadImages={uploadImages} />
      </div>
    </div>
  );
}
