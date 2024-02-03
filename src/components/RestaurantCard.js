import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const{restData} = props;


    return(
        <div className="m-8 p-6 w-[250px] h-[500px] font-serif break-word text-md  grid transition duration-700 ease-in-out  
        bg-[#f0f0f0] hover:bg-[#f0f0f0]] transform  
        hover:-translate-y-1 hover:scale-110  
        rounded-lg border border-[#f0f0f0]" >
            <img className="w-[200px] h-[200px] "
             alt="restro-pic"
             src={CDN_URL+restData.info.cloudinaryImageId}/>
             <h3 className="font-bold py-2 text-lg font-serif">{restData.info.name}</h3>
             <h4 className="break-all">{restData.info.cuisines.join(",")}</h4>
             <h4>{restData.info.avgRating}⭐</h4>
             <h4>{restData.info.costForTwo}</h4>
             <h4>{restData.info.sla.deliveryTime} minutes</h4>
             
        </div>
       
    )
}

export default RestaurantCard;