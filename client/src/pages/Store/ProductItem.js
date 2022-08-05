import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import "./style.scss";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity, likes } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="bg-white hover:bg-neutral-500 shadow-xl hover:text-white hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="relative mt-2 mx-2">
        <Link to={`/products/${_id}`}>
          <div className="h-56 rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              alt={name}
              src={`/images/${image}`}
            />
          </div>
        </Link>
        <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
          <div className="h-10 w-10 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <AiFillHeart />
          </div>
          <div className="h-10 w-16 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <BsChatSquareFill />
            <span className="text-gray-800 ml-2 group-hover:text-white">
              {likes}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 w-full px-4">
        <h5 className="font-medium leading-none text-base tracking-wider text-green-600 font-bold">
          {name}
        </h5>
        <div className="font-medium leading-none text-base tracking-wider text-gray-400">
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span className="font-medium leading-none text-base tracking-wider text-gray-400">
          ${price}
        </span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
