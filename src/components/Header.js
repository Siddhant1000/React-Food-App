import { LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";



const Header = () => {
  const navigate = useNavigate();


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/login');
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 p-1 shadow-md">
      <div className="flex justify-between items-center">
        <div className="logo-container">
          <img className="w-[160px] h-[140px]" src={LOGO_URL} alt="Logo" />
        </div>
        <div>
          <h1 className="font-serif font-bold text-6xl my-10 shadow-lg bg-[#e7e5e4]">FOOD VILLA</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 gap-10 text-xl font-serif sm:text-sm lg:text-lg">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Me</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">🛒Cart({cartItems.length})</Link>
            </li>
            <li className="px-4">
              <Link to="/login">SignIn</Link>
            </li>
            <li className="px-4">
              <Link to="/">Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
