import React from "react";
function Homepage(){
    return(
        <div className="relative h-screen bg-[url('assets/pic1.jpg')] bg-cover bg-center">
            <h1 className="text-6xl p-10 pt-30 pl-20 leading-20">Building Excelllence <br></br>
                Across Every Scale
            </h1>
            <p className="p-10 pl-20">Trusted construction partner for residential , commercial and 
                industrial projects since 2000.
            </p>
            <div className="flex justify-between items-center">
                <div className="p-10 pl-20">
                    <button className="bg-pink-600">Explore Projects</button>
                    <button className="bg-pink-900 ml-5">Get Consultation</button>
                </div>
                <div className="grid grid-flow-col gap-10">
                    <p className="bg-amber-500">500+ <br></br> Projects</p>
                    <p className="bg-amber-500">25 <br></br> Years</p>
                    <p className="bg-amber-500">98% <br></br> Done</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage