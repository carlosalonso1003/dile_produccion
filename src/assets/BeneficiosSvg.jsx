import React from "react";

export default function BeneficiosSvg() {
  return (
    <div className="w-10 h-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g>
          <rect
            width="100%"
            height="100%"
            x="12"
            y="18"
            fill="#414042"
            rx="3"
          ></rect>
          <path
            fill="#fff200"
            d="M50 11H14a2 2 0 00-2 2v8h40v-8a2 2 0 00-2-2z"
          ></path>
          <path
            fill="#414042"
            d="M32 9.23V11h-3.61l-1.91-3.06a2 2 0 00-1.7-.94H24a2 2 0 000 4h-5.65a5.79 5.79 0 01-.21-3.24A6.3 6.3 0 0124.36 3h.42a6 6 0 015.09 2.82z"
          ></path>
          <path fill="#ffbe00" d="M50 11H32v10h20v-8a2 2 0 00-2-2z"></path>
          <path
            fill="#231f20"
            d="M52 21v16a3 3 0 01-3 3H32V21zM45.65 11H40a2 2 0 000-4h-.78a2 2 0 00-1.7.94L35.61 11H32V9.23l2.13-3.41A6 6 0 0139.22 3h.42a6.3 6.3 0 016.22 4.76 5.79 5.79 0 01-.21 3.24z"
          ></path>
          <rect
            width="28"
            height="20"
            x="4"
            y="40"
            fill="#414042"
            rx="2.45"
          ></rect>
          <rect
            width="28"
            height="10"
            x="32"
            y="50"
            fill="#231f20"
            rx="2.45"
          ></rect>
          <rect
            width="24"
            height="10"
            x="32"
            y="40"
            fill="#ffbe00"
            rx="2.45"
          ></rect>
        </g>
      </svg>
    </div>
  );
}
