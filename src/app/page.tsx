"use client";
import { data } from "../../data";
import { useState } from "react";
interface Data {
  title: string;
  id: number;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default function Home() {
  const [search, setsearch] = useState("");
  console.log(search);
  return (
    <div className="flex flex-col justify-center items-start md:items-center w-[100%]">
      {/* Heading */}
      <h1 className="font-bold text-[30px] md:text-[44px] mx-5 md:mx-0 text-start my-8">
        Blog
      </h1>

      <div className="w-[50vw] mx-5 md:mx-0">
        <input
          className="bg-gray-200 my-5 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          placeholder="Enter search title or content "
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center items-start">
        {data
          .filter(
            (item: Data) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((item: Data) => {
            return (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} width={150} height={150} className="hidden md:block"/>
                <div className="hover:bg-gray-200 p-4 w-full ">
                  <h1 className="md:text-[30px] text-[26px] font-medium my-2">{item.title}</h1>
                  <p className="font-normal text-[16px] md:text-[20px] mb-2">
                    {item.date} |{" "}
                    <span className="text-gray-400">{item.author}</span>
                  </p>
                  <p className="font-normal text-[16px] mb-6">
                    {item.description}
                  </p>
                  <hr/>
                </div>
              </div>
              
            );
          })}
      </div>
    </div>
  );
}
