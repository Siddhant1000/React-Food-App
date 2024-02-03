import React from "react";
import { GITHUB, GMAIL, LINKED_IN } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        bio: "Default",
      },
    };
  }
s
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/siddhant1000");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    const githubprofilelink = "https://github.com/Siddhant1000";
    const gmailprofileLink = "sidvaidwal73@gmail.com";
    const linkedinProfileUrl = "https://www.linkedin.com/in/siddhant-v-41b763222/";

    return (
      <div className="mt-[180px] font-serif text-xl text-center">
        <img className="w-[300px] mx-auto" src={avatar_url} alt={name} />
        <h2 className="mt-[20px]">{name}</h2>
        <h3 className="mt-[10px]">{location + ", India"}</h3>
        <p className="mt-[10px]">
          I am pursuing BTECH in Computer Science
          from Maharaja Agrasen Institute Of Technology. I am currently in the
          3rd year, and I love to work with new technologies and frameworks.
        </p>
        <h3>Feel free to connect with me !!!!</h3>
        <div className="text-center flex justify-center space-x-4 mt-10">
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
            <img
            className="w-[50px] mt-2 cursor-pointer"
            src={LINKED_IN}
            alt="LinkedIn"
            />
            </a>
            <a href={`mailto:${gmailprofileLink}`} target="_blank" rel="noopener noreferrer">
              <img 
               className="w-[50px] mt-4 cursor-pointer"
               src={GMAIL}  
               alt="Gmail"
               />
               </a>
               <a href={githubprofilelink} target="_blank" rel="noopener noreferrer">
                <img  
                className="w-[50px] mt-1 cursor-pointer"
                src={GITHUB}
                alt="Github"
                />
                </a>
                </div>
                </div>
    );
  }
}

export default UserClass;
