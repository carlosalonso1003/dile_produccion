import "./stylesCard.css";
export default function MoldeFuncionario({
    imgPerfil,
    name,
    title,
  }) {
    return (
      <>
        <div className="group">
            <div className="container-card border-2 border-primary-800 ">
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

        </div>
      </>
    );
  }
  