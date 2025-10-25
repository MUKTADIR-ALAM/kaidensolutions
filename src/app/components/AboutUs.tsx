"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br />
              Kelvin C. Udarbe
            </h2>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              At Kaiden Solutions, we specialize in providing skilled,
              affordable, and flexible offshore staffing solutions designed to
              help businesses grow—without the high costs of local hiring.
              Founded by Kelvin C. Udarbe, a seasoned BPO professional with over
              9 years of experience in customer service, sales, and offshore
              team management, Kaiden Solutions has become a trusted partner for
              companies seeking to scale efficiently and effectively.
            </p>

            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                <span className="relative">Have a question?</span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="https://wa.me/639195095766"
                target="_blank"
                title="Twitter"
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Decorative blob"
              width={600}
              height={600}
            />

            <Image
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://i.ibb.co.com/Dgpm8mhG/Untitled.png"
              alt="Business Man"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
