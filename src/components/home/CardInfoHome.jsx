import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function CardInfoHome({ title, image, link, output }) {
  // Primera instancia de useInView
  const { ref: refCustom, inView: inView1 } = useInView({
    threshold: 0.25,
  });
  return link ? (
    output ? (
      <Link
        ref={refCustom}
        className={`card-home-info opacity-transition  ${
          inView1 ? "opacity-100" : "opacity-0"
        }`}
        to={link}
        target="_blank"
        preventScrollReset={true}
      >
        <img
          src={image}
          alt="creditos"
          className="object-cover w-full"
          loading="lazy"
        />
        {title ? <h3>{title}</h3> : <></>}
      </Link>
    ) : (
      <Link
        ref={refCustom}
        className={`card-home-info opacity-transition  ${
          inView1 ? "opacity-100" : "opacity-0"
        }`}
        to={link}
      >
        <img
          src={image}
          alt="creditos"
          className="object-cover w-full"
          loading="lazy"
        />
        {title ? <h3>{title}</h3> : <></>}
      </Link>
    )
  ) : (
    <div
      ref={refCustom}
      className={`card-home-info opacity-transition  ${
        inView1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image}
        alt="creditos"
        className="object-cover w-full"
        loading="lazy"
      />
      {title ? <h3>{title}</h3> : <></>}
    </div>
  );
}
