import React from "react";
import User from "./user";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("parent constructor");
     }

     componentDidMount(){
        console.log("Prent component did mount");
     }
    render(){
        console.log("parent render")
        return (
            <div>
                {/* <p>About class component</p>
                <h1>THIS IS ABOUT US</h1> */}
    
                <UserClass />
            </div>
        )
    }
}
/*
-Parent constructor
-Parent Render

  -First constructor
  -First render


  -Second constructor
  -Second render

  
  -First componentdidmount
  -Second componentdidmount 

-parent ComponentDidMount
*/

export default About;