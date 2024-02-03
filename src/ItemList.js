import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addItem, removeItem } from "./utils/cartSlice";

const ItemList = ({items}) =>{


    const dispatch = useDispatch();

    const handleRemoveItem = () =>{
        dispatch(removeItem(items));
    }

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
        
        
    }
    return (

        <div>
            {items.map((item) => (
            <div
             key={item.card.info.id}
             className="p-2 m-2 border shadow-lg border-[#4d4949] border-b-2 text-left font-semibold justify-between flex"
             >
                
                <div className="w-9/12">
                <div className=" font-serif py-2 font-bold m-4">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100}
                    </span>
                </div>
                
                <p className="text-med m-4 font-serif">{item.card.info.description}</p> 
                
                </div> 
                <div className="w-2/12 p-4">

                <div className="absolute">
                <button className="p-1 mx-4 my-8 rounded-lg bg-white shadow-lg absolute top-[60px]"onClick={()=>handleRemoveItem(item)}>➖</button>
                <button className="p-1 mx-[70px] my-8 rounded-lg bg-white shadow-lg absolute top-[60px]" onClick={()=>handleAddItem(item)}> ➕ </button>
                </div>
                <img src={CDN_URL + item.card.info.imageId}></img>
                </div>
               
            </div>
            
            
            ))}
        </div>
    );

};

export default ItemList;