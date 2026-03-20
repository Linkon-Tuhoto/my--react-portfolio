import React, { useState, useEffect } from "react";
import logoImage from '../assets/codegirl.jpg';
function Header(){
    const [open, setopen] = useState(false);
    const [active, setactive] = useState(home);
    useEffect(() => {
        const sections = ["home", "about", "services", "project", "contact"];
        section.forEach((id) => {
            const section = document.getElementById(id);

            if(section) {
                const top = window.scrollY;
                const offset = section.offsetTop - 100;
                const height = section.offsetHeight;

                if(top >= offset && top < offset + height){
                    setactive(id);
                }
            }
        });
    };
    )
    return(
        <div className="fixed w-full top-0 z-100">
        <div className="flex items-center justify-between bg-slate-50 shadow-2xl">
            <div className="text-blue-800 m-5 grid grid-flow-col gap-5">
                <img src={logoImage} alt="Person" className="w-10 h-10 md:w-20 md:h-20 rounded-full"></img>
                <h1 className="text-2xl md:text-3xl">Ticon</h1>
            </div>
            <div className="">
                <ul className="md:grid md:grid-flow-col md:justify-center md:gap-10 md:mr-20 hidden m-5">
                    <li><a href="#home" className="text-gray-800 hover:text-purple-500">Home</a></li>
                    <li><a href="#about" className="text-gray-800 hover:text-purple-500">About</a></li>
                    <li><a href="#services" className="text-gray-800 hover:text-purple-500">Services</a></li>
                    <li><a href="#project" className="text-gray-800 hover:text-purple-500">Projects</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-purple-500">Contact</a></li>
                </ul>

                <button className="text-7xl mr-10 md:hidden mb-4 cursor-pointer" onClick={() => Setopen(!open)}>=</button>
            </div>

        </div>

            {open && (
            <ul className="grid grid-flow-row justify-center gap-10 md:hidden bg-white/80 backdrop-blur-md shadow-lg absolute top-full w-1/2 right-0 rounded-l-2xl shadow p-10 pb-[100%] mb-0 ">
                    <li><a href="#home" className="relative text-gray-800 hover:text-purple-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:full ">Home</a></li>
                    <li><a href="#about" className="text-gray-800 hover:text-purple-500">About</a></li>
                    <li><a href="#services" className="text-gray-800 hover:text-purple-500">Services</a></li>
                    <li><a href="#project" className="text-gray-800 hover:text-purple-500">Projects</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-purple-500">Contact</a></li>
                </ul>)}
        </div>
        
    );
}

export default Header