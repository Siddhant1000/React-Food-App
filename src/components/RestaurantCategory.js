
import { useState } from "react";
import ItemList from "../ItemList";


const RestaurantCategory = ({data})=>{

    const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{

        setShowItems(!showItems);

    }

    return (

    
        <div>
            {/*Header*/}
            <div className="w-6/12 mx-auto my-10 bg-[#e3e7eba9] shadow-lg p-4">
                <div className="flex justify-between mx-3 my-3 cursor-pointer" 
                onClick={handleClick}
                >
                <span className="font-serif font-semibold">
                    {data.title}
                    ({data.itemCards.length})
                    </span>
                <span>🔽</span>

                </div>
                
                {showItems &&<ItemList items={data.itemCards}/>} 
            </div>
            

            
        </div>

    );

};
export default RestaurantCategory;