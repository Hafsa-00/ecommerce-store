



import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";


import aboutus1 from "../../public/images/aboutus1.png";
import aboutus2 from "../../public/images/aboutus2.png";
import aboutus3 from "../../public/images/aboutus3.png";


function AboutUs() {
    return (
        <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
            {/* Heading */}
            <div className="text-white w-full md:w-[50%]">
                <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
                    About Us
                </h1>


                <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
                    <span className="text-[#FF9F0D]">We</span> Create the Best Foody
                    Product
                </h1>


                <p className="text-[10px] md:text-[16px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                    sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                    consequat.
                </p>


                <ul>
                    <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
                        <span className="mr-[10px]">
                            <FaCheck />
                        </span>{" "}
                        Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </li>
                    <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
                        <span className="mr-[10px]">
                            <FaCheck />
                        </span>{" "}
                        Quisque diam pellentesque bibendum non dui volutpat fringilla
                    </li>
                    <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
                        <span className="mr-[10px]">
                            <FaCheck />
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                </ul>


                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
                        See More
                    </button>
                </div>
            </div>


            {/* Image Section */}
            <div className="mt-[50px] md:mt-0 ">
                <Image src={aboutus1} alt="About Us Image 1" className="" />
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
                    <Image
                        src={aboutus2}
                        alt="About Us Image 2"
                        className="mr-[16px] pt-[40px]"
                    />
                    <Image src={aboutus3} alt="About Us Image 3" className="pt-[40px]" />
                </div>
            </div>
        </section>
    );
}


export default AboutUs;



