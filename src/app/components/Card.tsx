import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
      <Image
        src={
          "https://images.pexels.com/photos/32742909/pexels-photo-32742909.jpeg?_gl=1*sgv49e*_ga*MTcwNTAzNDU1OS4xNzYxMzE1MjI0*_ga_8JE65Q40S6*czE3NjEzMTUyMjQkbzEkZzEkdDE3NjEzMTUyMjckajU3JGwwJGgw"
        }
        alt="something"
        width={600}
        height={400}
      ></Image>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
