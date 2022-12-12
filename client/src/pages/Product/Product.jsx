import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

// const Product = () => {
//   const id = useParams().id;
//   const [selectedImg, setSelectedImg] = useState("img");
//   const [quantity, setQuantity] = useState(1);

//   const { data, loading, error } = useFetch(`/products/${id}?populate=*`);


//   return (
//     <div className='product'>
//       {loading ? (
//         "загрузка"
//         ) : (
//       <>
//       <div className="left">
//         <div className="images">
//           <img
//           src={data?.attributes?.img?.data?.attributes?.url}
//           alt=""
//           onClick={(e)=>setSelectedImg("img")} />
//           <img
//           src={data?.attributes?.img2?.data?.attributes?.url}
//           alt=""
//           onClick={(e)=>setSelectedImg("img2")} />
//         </div>
//         <div className="mainImg">
//           <img src={data?.attributes[selectedImg].data?.attributes?.url} alt="" />
//         </div>
//       </div>
//       <div className="right"></div>
//       <h1>Title</h1>
//       <span>$100</span>
//       <p>
//         sdsdasdsdad
//       </p>
//       <div className="quantity">
//         <button>-</button>
//         {quantity}
//         <button>+</button>
//       </div></>)}
//     </div>
//   )
// }



const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  
  return (
    <div className="product">
      {loading ? (
      "загрузка..."
      ) : (
        <>
      <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{data?.attributes?.price} ₽</span>
            <h3>Описание:</h3>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    author: data.attributes.author,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> Добавить в корзину
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> В список желаний
              </div>
              <div className="item">
                <BalanceIcon /> В сравнение
              </div>
            </div>
            <div className="info">
            <p>Автор: {data?.attributes?.author}</p>
            <span>Возрастное ограничение: {data?.attributes?.agelimit}</span>
            <span>Год издания: {data?.attributes?.year}</span>
            <span>Количество страниц: {data?.attributes?.pagesnumber}</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div></>)}
    </div>
  );
};

export default Product;
