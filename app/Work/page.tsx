"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { FaReact, FaJsSquare, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript, SiVercel } from "react-icons/si";
import Link from "next/link";

export default function ProjectSlider() {
    const projects = [
        {
            id: "01",
            title: "MeetAlex Portfolio Website",
            desc: "A personal portfolio built with Next.js, Tailwind CSS, and deployed on Vercel with a custom domain.",
            tech: ["nextjs", "typescript", "vercel"],
            img: "/Project-1.jpg",
        },
        {
            id: "02",
            title: "Catalyst Challenge — OpenHarvest",
            desc: "Collaborated with a multidisciplinary team at Ontario Tech to design OpenHarvest, an AI-powered platform that connects farmers and buyers to reduce food waste and improve supply chain efficiency.",
            tech: ["figma", "tailwind css", "react js"],
            img: "/Project-2.jpg",
        },
        {
            id: "03",
            title: "Kudi Kitchen — Cookbook & Content Brand",
            desc: "Launched and managed a digital cookbook business focused on weight-loss recipes. Combined e-commerce, content creation, and digital marketing strategies to grow sales and build an online community.",
            tech: ["bootstrap css", "motion", "react js"],
            img: "/Project-3.jpg",
        },
        {
            id: "04",
            title: "Create Business Portfolio",
            desc: "Worked with clients to create tailored business portfolios that effectively showcase their brand and services.",
            tech: ["tailwind css", "motion", "react js"],
            img: "/Project-4.jpg",
        },
    ];

    return (
        <div className="px-[8%] lg:px-[16%] py-15 text-white">
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                spaceBetween={40}
                slidesPerView={1}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">

                            {/* Left Side */}
                            <div className="work-content">
                                <h2 className="text-8xl font-bold stroke-text">{project.id}</h2>
                                <h3 className="text-5xl font-semibold font-unbounded mt-4">{project.title}</h3>
                                <p className="text-gray-400 mt-3 text-lg leading-relaxed">{project.desc}</p>

                                {/* Tech Icons */}
                                <div className="flex gap-4 mt-4">
                                    {project.tech.map((tech, index) => {
                                        let IconComponent;
                                        switch (tech.toLocaleLowerCase()) {
                                            case "react js":
                                            case "react js":
                                                IconComponent = FaReact;
                                                break;
                                            case "tailwind css":
                                                IconComponent = SiTailwindcss;
                                                break;
                                            case "javascript":
                                                IconComponent = FaJsSquare;
                                                break;
                                            case "bootstrap css":
                                                IconComponent = FaBootstrap;
                                                break;
                                            case "figma":
                                                IconComponent = FaFigma;
                                                break;
                                            case "motion":
                                                IconComponent = SiFramer;
                                                break;

                                           case "nextjs":
                                                 case "next.js":
                                                  IconComponent = SiNextdotjs;
                                               break;

                                            case "typescript":
                                                case "ts":
                                                 IconComponent = SiTypescript;
                                                break;

                                            case "vercel":
                                               IconComponent = SiVercel;
                                                break;
                                            default:                            
                                                IconComponent = null;
                                        }
                                        return IconComponent ? (
                                            <div key={index} className="work-icons text-4xl text-[color:var(--primary-color)] cursor-pointer hover:text-white
                                            transition-all duration-300" title={tech}>
                                                <IconComponent />
                                            </div>
                                        ) : null;
                                    })}
                                </div>

                                {/* Icons */}
                                <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                                    <Link 
                                        href="#"
                                        className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                        transition-all duration-500"
                                    >
                                        <i className="bi bi-arrow-up-right text-2xl"></i>
                                    </Link>
                                    <Link 
                                        href="#"
                                        className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                        transition-all duration-500"
                                    >
                                        <i className="bi bi-github text-2xl"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative work-image">
                                <Image 
                                    src={project.img}
                                    alt={project.title}
                                    width={650}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Button */}
                <div className="flex gap-3 justify-end mt-6">
                    <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                    text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
                        <i className="bi bi-arrow-left text-2xl"></i>
                    </button>
                    <button className="custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                    text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500">
                        <i className="bi bi-arrow-right text-2xl"></i>
                    </button>
                </div>
            </Swiper>
        </div>
    );
}
