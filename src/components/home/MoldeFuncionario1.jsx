export default function MoldeFuncionario1({
    imgPerfil,
    name,
    title,
    direccion,
  }) {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 p-8 border-4 border-primary-800 rounded-2xl">
          
  
          <div className="flex 2smm:justify-center items-center">
            <div className="flex flex-col space-y-4 2smm:space-y-12 ">
              <div className="flex flex-col space-x-0 space-y-2 2smm:flex-row justify-between 2smm:space-x-12 2smm:space-y-0">
                <div>
                  <div className="font-light text-[16px] lg:text-[18px] text-justify">
                    <p>{direccion}</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="w-full flex flex-col 2smm:flex-row gap-4 lg:flex-col items-center justify-center  ">
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 border-2 rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${imgPerfil})`,
              }}
            ></div>
            <div className="text-center">
              <p className="font-light">
                <span className="font-normal text-primary-800">{name}</span>
              </p>
              <p className="font-light mt-0">
                <span className="font-bold text-primary-800">{title}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  