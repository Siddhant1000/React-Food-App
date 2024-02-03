import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItem = useSelector((store)=> store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    };

    const handleTotalCart = () =>{
      dispatch(totalCart());
    }


  return (
    <div 
    className="text-center m-[120px] p-10">
    <h1 className="text-2xl font-bold font-serif">Cart</h1>
    <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-md"
        onClick={handleClearCart}
        >
            Clear Cart
            </button>
            {cartItem.length === 0 && <h1 className="text-xl font-serif m-5 p-4">Your Cart is empty 😢 Add cart items!!</h1>}
        <ItemList items={cartItem}/>
    </div>
    </div>
  )
}

export default Cart;