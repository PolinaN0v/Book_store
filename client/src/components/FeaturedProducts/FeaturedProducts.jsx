import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios"


const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    );


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} книги</h1>
        <p>
        Booking.ru не только предлагает новинки и бестселлеры на любой вкус,
        но и помогает определиться с выбором. Для этого на сайте публикуются
        списки книг, тематические подборки, новости, и отзывы реальных покупателей.
        </p>
      </div>
      <div className="bottom">
          {error
          ? "что-то не так" 
          : loading
          ? "загрузка..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
};

export default FeaturedProducts;


