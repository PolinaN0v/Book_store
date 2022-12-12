import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };


  

  const stripePromise = loadStripe(
    "pk_test_51MBjXRLRk3xo3lDmldY1pQT0p8TNvVAAW4gT4Oc6UZhgUz8AnOKxBAj7IQP1t9n32JGYRQOGECI5Znl1tj3txBfr00iotoUWbz"
  );
  
  const handlePayment = async (e) => {

    try {
      dispatch(resetCart())
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  }; 
  return (
    <div className="cart">
      <h1>Товары в корзине:</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>Итог:</span>
        <span>руб {totalPrice()}</span>
        
      </div>
      <button onClick={handlePayment}>Перейти к оформлению</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Сбросить товары
      </span>
    </div>
  );
};

export default Cart;




// import React from "react";
// import "./Cart.scss";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import { useSelector } from "react-redux";
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { useDispatch } from "react-redux";
// import { makeRequest } from "../../makeRequest";
// import {loadStripe} from '@stripe/stripe-js';

// const Cart = () => {
//   const products = useSelector((state) => state.cart.products);
//   const dispatch = useDispatch();

//   const totalPrice = () => {
//     let total = 0;
//     products.forEach((item) => {
//       total += item.quantity * item.price;
//     });
//     return total.toFixed(2);
//   };

//   const stripePromise = loadStripe(
//     "pk_test_51MBjXRLRk3xo3lDmldY1pQT0p8TNvVAAW4gT4Oc6UZhgUz8AnOKxBAj7IQP1t9n32JGYRQOGECI5Znl1tj3txBfr00iotoUWbz"
//   );


//   const handlePayment = async () => {
//     try {
//       const stripe = await stripePromise;

//       const res = await makeRequest.post("/orders", {
//         products,
//       });

//       await stripe.redirectToCheckout({
//         sessionId: res.data.stripeSession.id,
//       })
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <div className="cart">
//       <h1>Товары в вашей корзине</h1>
//       {products?.map(item=>(
//         <div className="item" key={item.id}>
//           <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
//           <div className="details">
//             <h1>{item.title}</h1>
//             <p>{item.desc?.substring(0, 100)}</p>
//             <div className="price">
//               {item.quantity} x ${item.price}
//             </div>
//           </div>
//           <DeleteOutlinedIcon
//             className="delete"
//             onClick={() => dispatch(removeItem(item.id))}
//           />
//         </div>
//       ))}
//       <div className="total">
//         <span>Итог</span>
//         <span>руб{totalPrice()}</span>
//       </div>
//       <button onClick={handlePayment}>Перейти к оформлению</button>
//       <span className="reset" onClick={() => dispatch(resetCart())}>
//         Сбросить корзину
//       </span>
//     </div>
//   );
// };

// export default Cart;
