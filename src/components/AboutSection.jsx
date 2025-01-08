import React from "react";
import { about, imageDetails } from "../../data";
import CountUp from "react-countup";

export default function About() {
    return (
        <div className="container-xxl py-16 sm:pt-52">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h6 className="text-primary text-lg uppercase font-tertiary tracking-[6px] font-semibold mb-4">About Us</h6>
                        <h1 className="text-4xl font-extrabold font-tertiary text-primary mb-6">
                            Welcome to{" "}
                            <span className="text-accent font-tertiary">LuxuryStay</span>
                        </h1>
                        <p className="text-lg text-primary font-tertiary mb-6">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                            sed stet lorem sit clita duo justo magna dolore erat amet.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                            {about.map((item, key) => (
                                <div
                                    className="flex flex-col items-center bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out"
                                    key={key}
                                >
                                    <div className="text-accent text-4xl mb-4"><item.icon /></div>
                                    <h2 className="text-3xl font-bold text-primary mb-2">
                                        <CountUp
                                            start={0}
                                            end={item.count}
                                            duration={2} 
                                            separator=","
                                        />
                                    </h2>
                                    <p className="text-primary font-primary text-center">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='btn btn-primary hover:bg-accent-hover h-10' type='submit'>Explore Now</button>
                    </div>
                    {/* Right Column - Images */}
                    <div className="w-full lg:w-1/2 gap-4 hidden lg:grid grid-cols-2 sm:grid-cols-2">
                        {imageDetails.map((image, index) => (
                            <div key={index} className="relative col-span-2 sm:col-span-1 group">
                                <img
                                    className="w-full h-full object-cover shadow-xl transform "
                                    src={image.src}
                                    alt={image.alt}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0  "></div>
                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-lg font-semibold font-primary">{image.title}</h3>
                                    <p className="text-sm font-tertiary uppercase">{image.description}</p>
                                </div>
                            </div>
                        ))}
                        {/*
                        <div className="relative col-span-2 sm:col-span-1">
                            <img
                                className="w-full h-full object-cover shadow-xl transform transition duration-500 hover:scale-105"
                                src="/assets/img/about-4.jpg"
                                alt="Pool Area"
                            />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
}
