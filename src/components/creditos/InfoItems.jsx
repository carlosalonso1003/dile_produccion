import React from "react";

export default function InfoItems({ Title, textColor, children }) {
  return (
    <div className={`flex justify-center items-center mt-8`}>
      <div className=" rounded-lg px-4 w-full ">
        <h2
          className={`text-[24px] lg:text-[32px] font-bold mb-4 text-center ${textColor}`}
        >
          {Title}
        </h2>
        {children}
      </div>
    </div>
  );
}
