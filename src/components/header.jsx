import React, { useState } from "react";
import logoImage from '../assets/codegirl.jpg';
function Header(){
    const [open, Setopen] = useState(false);
    return(
        <div className="fixed w-full">
        <div className="flex items-center justify-between bg-slate-50 shadow-2xl">
            <div className="text-blue-800 m-5 grid grid-flow-col gap-5">
                <img src={logoImage} alt="Person" className="w-10 h-10 md:w-20 md:h-20 rounded-full"></img>
                <h1 className="text-2xl md:text-3xl">Ticon</h1>
            </div>
            <div className="">
                <ul className="md:grid md:grid-flow-col md:justify-center md:gap-10 md:mr-20 hidden m-5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="text-7xl mr-10 md:hidden mb-4 cursor-pointer" onClick={() => Setopen(!open)}>=</button>
            </div>

        </div>

            {open && (
            <ul className="grid grid-flow-row justify-center gap-10 md:hidden bg-amber-300 absolute top-full w-1/2 right-0 rounded-l-2xl shadow">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>)}
        </div>
        
    );
}

export default Header