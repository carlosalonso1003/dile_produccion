import { useState } from "react";

export default function IconImage({
  Icon,
  Title,
  textColor,
  textHover,
  borderColor,
  borderHover,
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col items-center border-2 py-12 rounded-tl-3xl rounded-br-3xl px-4 ${
          isHover ? textHover : textColor
        } ${isHover ? borderHover : borderColor}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden items-center-row border-2 flex items-center justify-center ${
            isHover ? borderHover : borderColor
          }`}
        >
          {Icon}
        </div>
        <h1 className="mt-2 font-medium text-[16px] text-center">{Title}</h1>
      </div>
    </>
  );
}
