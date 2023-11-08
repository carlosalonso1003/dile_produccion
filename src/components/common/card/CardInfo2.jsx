import { Link } from "react-router-dom";
import "./styles.css";

export default function CardInfo2({ icon, title, linkTo }) {
  return (
    <>
      <Link to={linkTo}>
        <div className="group">
          <div
            className={`container-card border-2 border-primary-800 hover:bg-primary-100 text-primary-800 cursor-pointer`}
          >
            <div className={`container-card__icon`}>
              <img
                src={`${process.env.PUBLIC_URL}${icon}`}
                alt={`icon-chanchito ${title}`}
                loading="lazy"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
            </div>
            <h1 className={``}>{title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
