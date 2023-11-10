import "./styles.css";

export default function CardInfo({ icon, title, description }) {
  return (
    <>
      <div className="group">
        <div className={`container-card border-2 border-primary-800 hover:scale-105 hover:bg-primary-100`}>
          
            <div className={`container-card__icon  `}>
              <img
                src={`${process.env.PUBLIC_URL}${icon}`}
                alt={`icon-chanchito ${title}`}
                loading="lazy"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </div>
            <h1 className={`text-primary-800 font-bold`}>{title}</h1>
            <p className={`text-primary-800 text-justify font-light p-5`}>{description}</p>

        </div>
      </div>
    </>
  );
}
