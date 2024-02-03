import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";



const LoginForm = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = ()=>{
    let nameValue = null;
    if (name.current) {
    nameValue = name.current.value;
  }
    const message = checkValidData(email.current.value,password.current.value,nameValue);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,
         email.current.value,
         password.current.value
         )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    toggleSignInForm();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: nameValue
    }).then(() => {
      navigate('/');
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
      
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });

    }


  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}className="rounded-3xl w-[450px] h-[700px] p-12 bg-blue-500 bg-opacity-70 absolute  my-36 mx-auto mt-[200px] right-0 left-0 font-sans">
        <h1 className="font-bold text-5xl py-6 text-center text-white">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name}  type="text" placeholder="Your Name" 
        className="border-2 border-gray-800 p-4 mx-1 w-full rounded-lg font-serif mt-4"></input>)}
        <input ref={email} type="text" placeholder="Email Address" className="border-2 border-gray-800 p-4 mx-1 w-full rounded-lg font-serif mt-6"></input>
        <input ref={password} type="password" placeholder="Password" className="border-2 border-gray-800 p-4 mx-1 w-full  rounded-lg   font-serif mt-6"></input>
        <p className="text-white font-semibold mt-5 mx-2">{errorMessage}</p>
        <button className="p-4 mx-[150px] my-[40px] bg-white font-serif rounded-xl border-2 border-gray-800"
        onClick={handleButtonClick}>
          {isSignInForm ? "SignIn" :"SignUp"}</button>
        <p className=" cursor-pointer text-white text-lg font-semibold" onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
        </form>

      
    </div>
  )
}

export default LoginForm;