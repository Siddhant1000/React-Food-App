import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const[showIndex,setShowIndex] = useState(null);

    if (resInfo===null) return <Shimmer />; 

    const{ itemCards }=
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold text-lg font-serif my-2">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h2 className="font-bold text-lg font-serif ">{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")}</h2>
            <h2>{resInfo?.cards[0]?.card?.card?.info.avgRating+"⭐"}</h2>
            <h2>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>

            {categories.map((category,index)=>(
            <RestaurantCategory
             key={category?.card?.card.title} 
             data = {category?.card?.card}
             showItems={index === showIndex ? true : false}
             setShowIndex = {()=>
                setShowIndex(index)}
             />
            ))}

  
        </div>
    );

};

export default RestaurantMenu;