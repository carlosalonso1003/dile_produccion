import React from "react";
import { useInView } from "react-intersection-observer";

export default function CardSegura({ image, title, description }) {
  const { ref: refCard1, inView: inViewCard1 } = useInView({
    threshold: 0.25,
  });
  return (
    <div
      ref={refCard1}
      className={`o_card2_home_bg opacity-transition ${
        inViewCard1 ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
      }}
    >
      <div className="o_card2_home--info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
