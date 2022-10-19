import React from "react";

const ButtonPill = ({text, onClick}) => {
    // const handleClick = () => {
    //     console.log('CityBoy Villains');
    // }

    return (
        <button onClick={onClick} className="bg-white transform motion-safe:hover:scale-110 text-black font-24px font-bold py-2 px-4 rounded-full py-2 px-8">
            {text}
        </button>
    );
} 

export default ButtonPill;
