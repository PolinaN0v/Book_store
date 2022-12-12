import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span className="isNew">НОВИНКА</span>}
          {item?.attributes.BestSeller && <span className="BestSeller">БЕСТСЕЛЛЕР</span>}
          <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img.data.attributes.url} alt="" className="mainImg" />
          <img
          src={process.env.REACT_APP_UPLOAD_URL+item.attributes.img2.data.attributes.url}
          alt=""
          className="secondImg"
          />
      </div>
            <div className="prices">
            <h3>{item?.attributes.price} руб.</h3>
            <h3>{item.oldPrice || item?.attributes.price + 20} руб.</h3>
        </div>
      <h2>{item?.attributes.title}</h2>
      <h4>{item?.attributes.author}</h4>
    </div>
    </Link>
  )
}


export default Card;


// const Card = ({ item }) => {
//   return (
//     <Link className="link" to={`/product/${item.id}`}>
//       <div className="card">
//         <div className="image">
//           {item.isNew && <span>New Season</span>}
//           <img src={item.img} alt="" className="mainImg" />
//           <img src={item.img2} alt="" className="secondImg" />
//       </div>
//       <h2>{item.title}</h2>
//       <div className="prices">
//         <h3>${item.oldPrice}</h3>
//         <h3>${item.price}</h3>
//        </div>
//     </div>
//     </Link>
//   )
// }

// export default Card;
