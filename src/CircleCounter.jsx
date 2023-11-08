import React, { useState, useEffect, useRef } from "react";
import "./circleCounter.css";

function UserIndicator() {
  const [userCount, setUserCount] = useState(1);
  const componentRef = useRef(null);
  const isCounting = useRef(false);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && userCount < 21000 && !isCounting.current) {
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
      if (userCount < 21000) {
        setUserCount((prevUserCount) => {
          if (
            prevUserCount + Math.floor(Math.random() * (1000 - 1 + 1) + 1) >=
            21000
          ) {
            return 21000;
          } else {
            return (
              prevUserCount + Math.floor(Math.random() * (1000 - 1 + 1) + 1)
            );
          }
        });
      } else {
        clearInterval(interval);
      }
    }, 80); // Cambia el valor en milisegundos para ajustar la velocidad

    return () => {
      clearInterval(interval);
    };
  }, [userCount]);

  return (
    <div className="user-indicator " ref={componentRef}>
      <span className="animated-number">{userCount}</span> Socios
    </div>
  );
}

export default UserIndicator;
