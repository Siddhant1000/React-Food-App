import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";






const Body = () =>{

  //Local State Variable- Super powerful variable useState() 
  const[ListofRestaurants,setresList] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);

  const[searchText,setSearchText] = useState("");

  //console.log(ListofRestaurants);

  useEffect(()=>{
    fetchData();
  }, []);



  const fetchData = async() =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"

    );

    const json = await data.json();

    setresList(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);




  };

  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus===false) 
  return(
  <h1>
    Looks like you are offline !! Please check your internet connection!!!!
    </h1>
  
  );




    return ListofRestaurants.length===0?(
    <Shimmer/> 
    ): (
        <div className="body">
            <div className="filter flex justify-center mt-[150px]">
              <div className="search m-4 p-4 ">
                <input  type="text" 
                placeholder="Enter your fav restaurant"
                 className="border-2 rounded-xl px-10 py-2 border-solid border-black"
                 value={searchText}
                 onChange={(e)=>{
                  setSearchText(e.target.value);
                 }}/>
                  <button className="px-6 py-2 rounded-2xl bg-[#fda4af]  m-4 font-serif"
                  onClick={()=>{
                    const filteredList = ListofRestaurants.filter(
                      (restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));


                      setFilteredRestaurant(filteredList);
  
                    
                     
                  }}>Search</button>

              </div>
              <div className="search m-4 p-4 flex item-center">
              <button 
              className="px-4 py-2 rounded-lg bg-[#a5b4fc]  m-4 font-serif"
               onClick={()=>{
               const filteredList = ListofRestaurants.filter(

                (restData) => restData.info.avgRating > 4
               );

               setFilteredRestaurant(filteredList);
               
               
               


            }}
            >
              Top Rated Restaurants
              </button>


              </div>
             
            </div>
            <div className="flex flex-wrap">
              {
                filteredRestaurant.map((restaurant)=> 
                <Link key ={restaurant.info.id}
                to={"/restaurants/"+restaurant.info.id}>
                  <RestaurantCard  restData={restaurant}/>
                  </Link>
                  )
                
              }
  
            </div>
        </div>

    )

  

  
}

export default Body;
