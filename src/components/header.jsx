import React, { useState, useEffect } from "react";
import logoImage from '../assets/codegirl.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
function Header(){
    const [open, setopen] = useState(false);
    const [scrolled, setscroll] = useState(false);
    const [menuclosed, setmenuclosed] = useState(false);
    useEffect(() => {
        const handlescroll = () => {
            if(window.scrollY > 100){
                setscroll(true);
            }
            else{
                setscroll(false)
            }
        };
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);
    return(
        <section>
        <div className="fixed w-full top-0 z-100 scroll-smooth">
        <div id="navbar" className={`transition-all duration-300 ${ scrolled ? "bg-white shadow-lg" : "bg-purple-200/70"}`}>
        <div className="flex items-center justify-between ">
            <div className="text-blue-800 m-5 grid grid-flow-col gap-5 ">
                <img src={logoImage} alt="Person" className="w-10 h-10 md:w-20 md:h-20 rounded-full"></img>
                <h1 className="text-2xl md:text-3xl flex justify-center items-center inset-0 text-[#6B21A8] font-bold">Ticon</h1>
            </div>
            <div className="">
                <ul className="md:grid md:grid-flow-col md:justify-center md:gap-10 md:mr-20 hidden m-5 font-bold text-lg">
                    <li><a href="#home" className="text-gray-800 hover:text-purple-500">Home</a></li>
                    <li><a href="#about" className="text-gray-800 hover:text-purple-500">About</a></li>
                    <li><a href="#services" className="text-gray-800 hover:text-purple-500">Services</a></li>
                    <li><a href="#project" className="text-gray-800 hover:text-purple-500">Projects</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-purple-500">Contact</a></li>
                </ul>

                <button className="text-2xl mr-10 md:hidden mb-4 cursor-pointer" onClick={() => setopen(!open)}>{!open ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes} />}</button>
            </div>
        </div>

        </div>

            {open && (
            <ul className="grid grid-flow-row justify-center gap-10 md:hidden bg-white/80 backdrop-blur-md shadow-lg absolute top-full w-8/12 right-0 rounded-l-2xl shadow p-10 pb-[100%] mb-0 font-bold  text-2xl">
                    <li><a href="#home" className="text-gray-800 hover:text-purple-500 transition duration-300 " onClick={() => setopen(false)}>Home</a></li>
                    <li><a href="#about" className="text-gray-800  hover:text-purple-500" onClick={() => setopen(false)}>About</a></li>
                    <li><a href="#services" className="text-gray-800 hover:text-purple-500" onClick={() => setopen(false)}>Services</a></li>
                    <li><a href="#project" className="text-gray-800 hover:text-purple-500" onClick={() => setopen(false)}>Projects</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-purple-500" onClick={() => setopen(false)}>Contact</a></li>
                </ul>)}
        </div>
        </section>
        
    );
}

export default Header