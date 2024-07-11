import React from 'react'
import { ReactTyped } from "react-typed";
import portfolioimg from "../assets/portfolio4.jpg"

const Midsection = () => {
    const onButtonClick = () => {
        const pdfUrl = "Pratiyush-Mern-Stack.pdf ";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='grid place-content-center '>
            <div className='grid md:grid-cols-2 mt-18 md:mt-20 place-items-center'>
            <div className='m-6'>
                <img src={portfolioimg} className='rounded-full h-80 w-80' />
            </div>
            <div className=' text-center m-6'>
                <p className='text-gray-600 font-bold'>Hello, I'm</p>
                <h1 className='md:text-6xl text-4xl font-bold'>Pratiyush</h1>
                <h1 className='md:text-4xl text-3xl text-gray-400 ml-12 mb-4'>
                    <ReactTyped 
                        strings={[
                            "Full-Stack Mern Developer",
                            "Front-End React Developer",
                            "Back-End Node Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" className='outline-none'/>
                    </ReactTyped>
                </h1>
                
                <button className='p-4 rounded-full text-[#2d2e2e] hover:text-white hover:bg-[black] border-2 border-[black] m-2 font-bold' onClick={onButtonClick}>Download CV</button>
                <a href="#js_Contact">
                <button className='p-4 rounded-full bg-[#343a40] text-white text-white hover:bg-[black] m-2 font-bold '>Contact Info</button>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Midsection
