import "./styles.css";

export default function CardInfo1({ icon, title }) {
  return (
    <>
      <div className="group">
        <div className={`container-card  hover:scale-125 `}>
          <div className={`container-card__icon`}>
            {typeof icon === "string" ? (
              <img
                src={`${process.env.PUBLIC_URL}${icon}`}
                alt="icon-chanchito"
                loading="lazy"
                className="w-12 h-12 lg:w-16 lg:h-16 "
              />
            ) : (
              <>{icon}</>
            )}
          </div>
          <h1 className={`text-primary-50`}>{title}</h1>
        </div>
      </div>
    </>
  );
}
