import "./stylesCard.css";
export default function MoldeFuncionario({
    imgPerfil,
    name,
    title,
    descripcion,
  }) {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 rounded-3xl">
          <div className="w-full flex flex-col 2smm:flex-row gap-4 lg:flex-col items-center justify-center p-6">
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${imgPerfil})`,
              }}
            ></div>
            <div className="text-center">
              <p className="font-light">
                <span className="font-light text-primary-800">{name}</span>
              </p>
              <p className="font-light mt-2">
                <span className="font-bold text-primary-800">{title}</span>{" "}
              </p>
            </div>
          </div>
          <div className="items-center p-10">
            <p className="font-light text-justify">{descripcion}</p>
          </div>
        </div>
      </>
    );
  }
  