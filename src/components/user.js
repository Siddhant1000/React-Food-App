import { useEffect, useState } from "react";


const User =({name})=>{

    const[count,setCount]=useState(0);
    const[count2]=useState(1);

    useEffect(()=>{
        //Api call

    },[]);

    return (
    <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Count = {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @sidddd73</h4>
    </div>
    );
};

export default User;
