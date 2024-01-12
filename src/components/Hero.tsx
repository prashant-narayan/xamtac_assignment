import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-slate-700 ">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Elevate Your Style!
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Unleash the Fashion Hero Within with our new collection of clothing
            and accessories.
          </p>
          <a
            href="#product"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 flex inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            <p>Get started</p>
            <FaArrowRight />
          </a>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src="/product.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
