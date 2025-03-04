"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-black ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4  w-full cursor-pointer " data-aos="zoom-in">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-700 rounded-lg"
                  src={"/public/P1.jpeg"}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-200 bg-slate-400 opacity-40 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1 ">
                    Jewellery Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3  mt-5">
                   JEWELLERY
                  </h1>
                  
                  <Link
                    target="_blank"
                    href={"https://jewellery-website-using-next-js-tailwind-css.vercel.app/"}
                  >
                    <p className="leading-relaxed text-black hover:underline my-10">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 w-full cursor-pointer"  data-aos="slide-up">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-700 rounded-lg"
                  src={"/public/P3.jpeg"}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-200 bg-slate-400 opacity-40 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Furniture Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 mt-5">
                   FURNITURE
                  </h1>
                  
                  <Link
                    target="_blank"
                    href={"https://e-commerce-figma-website.vercel.app/"}
                  >
                    <p className="leading-relaxed text-black hover:underline my-10">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 w-full cursor-pointer"  data-aos="zoom-out">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-4 border-purple-700 rounded-lg"
                  src={"/public/P2.jpeg"}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-200 bg-slate-400 opacity-40 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 mt-5">
                    RESUME
                  </h1>
                  
                  <Link
                    target="_blank"
                    href={"https://hackathon-milestone3-by-iraj-fatima.vercel.app/"}
                  >
                    <p className="leading-relaxed text-black hover:underline my-10">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;