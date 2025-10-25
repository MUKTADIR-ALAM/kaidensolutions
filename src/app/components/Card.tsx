"use client";

import { Fullscreen } from "lucide-react";
import Image from "next/image";

export default function Card({ title, description,image }:{title:string,description:string,image:string}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
      <div className="w-full h-[200px]">

        <img className="w-full h-full"
        src={
          image
        }
        alt="something"
        
      ></img>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">
          {description}
        </p>
      </div>
      
    </div>
  );
}
