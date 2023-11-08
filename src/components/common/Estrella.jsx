export default function Estrella({ textNumber, icon, title, description }) {
  return (
    <>
      <div className="flex">
        <div>
          <div className="relative w-16 h-16 lg:w-20 lg:h-20">
            <img
              className="w-16 h-16 lg:w-20 lg:h-20"
              src={`${process.env.PUBLIC_URL}${icon}`}
              alt="estrella"
            />
            <div className="absolute z-30 top-0 left-0 w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <p className="font-medium text-[28px] text-white">
                  {textNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-[18px]">{title}</h3>
          <p className="font-light text-justify">{description}</p>
        </div>
      </div>
    </>
  );
}
