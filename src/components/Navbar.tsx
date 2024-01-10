import React from 'react'
import { FaPhoneAlt, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaShoppingCart } from "react-icons/fa";
import { IoMdMail, IoIosSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
    <div className="bg-black h-8 py-2 px-5 flex justify-between items-center text-white text-xs">
        <div className="flex items-center">
        <FaPhoneAlt/>
        <p className="px-1">(225)555-0118</p>
        <div className="flex items-center px-10">
        <IoMdMail />
        <p>michelle.rivera@example.com</p>
        </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center">
            <p>Follow Us :</p>
            <div className="px-2"><FaInstagram /></div>
            <div className="px-2"><FaYoutube /></div>
            <div className="px-2"><FaFacebook /></div>
            <div className="px-2"><FaTwitter /></div>
        </div>
    </div>
    <div className="bg-gray-50 h-20 py-2 px-5 flex justify-between items-center text-black">
        <p className="font-bold text-2xl">Bandage</p>
        <div className="flex items-center">
            <p>Home</p>
            <p className="px-5">Shop</p>
            <p>About</p>
            <p className="px-5">Blog</p>
            <p>Contact</p>
            <p className="px-5">Pages</p>
        </div>
        <div className="flex items-center text-blue-500">
            <div className="flex items-center">
            <MdOutlineAccountCircle style={{color:"blue"}}/>
            <p className="px-1 font-medium">Login / Register</p>
            </div>
            <div className="flex items-center px-5">
            <IoIosSearch style={{color:"blue"}}/>
            </div>
            <div className="flex items-center px-5">
            <FaShoppingCart style={{color:"blue"}}/>
            </div>
            <div className="flex items-center px-5">
            <CiHeart style={{color:"blue"}}/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Navbar