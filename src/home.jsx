import React from "react";
function Home(){
    return(
        <section className="flex justify-center items-center min-h-screen bg-[url('assets//codegirl.jpg')] bg-top bg-[length:100%_auto] bg-center bg-no-repeat bg-fixed ">
        <div className="flex flex-col items-start max-w-3xl px-10 mt-20">
            <h3 className="mb-4">EXQUISITE DINING EXPERIENCE</h3>
            <h1 className="font-semibold text-3xl">Savor the Art of Fine<br></br> Crusine</h1>
            <p className="font-medium">Indulge in our carefully crafted dishes made with the finest <br></br>
            ingredients, served with passion in an elegant atmosphere</p>
            <div className="mb-40">
                <button className="bg-amber-400 p-2 rounded-4xl hover:bg-amber-800 hover:text-white duration-75">Explore Our Menu</button>
                <button className="bg-transparent text-amber-600 ml-6 border-2 border-amber-600 p-2 rounded-4xl hover:bg-amber-600 hover:text-black duration-75">Make Reservation</button>
            </div>
        </div>
        </section>
    );
}

export default Home