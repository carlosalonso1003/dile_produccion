import React, { useState, useEffect, useRef } from "react";
import "./circleCounter.css";

function CounterYear() {
  const [userCount, setUserCount] = useState(1);
  const componentRef = useRef(null);
  const isCounting = useRef(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && userCount < 12 && !isCounting.current) {
          isCounting.current = true;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 1.0, // 1.0 means the entire component must be visible
    });

    const component = componentRef.current;

    if (component) {
      observer.observe(component);
    }

    return () => {
      if (component) {
        observer.unobserve(component);
      }
    };
  }, [userCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (userCount < 12) {
        setUserCount((prevUserCount) => prevUserCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 300); // Cambia el valor en milisegundos para ajustar la velocidad

    return () => {
      clearInterval(interval);
    };
  }, [userCount]);

  return (
    <div
      className="user-indicator w-10 h-10 lg:w-12 lg:h-12"
      ref={componentRef}
    >
      <span className="animated-number">
        <span className="text-primary-50 text-[24px] font-bold">+</span>
        {userCount}
      </span>
    </div>
  );
}

export default CounterYear;
