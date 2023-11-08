import { useState, useRef, useEffect } from "react";
import "./style.css";

export default function Slider2({ slidesInfo }) {
  const refSlider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [isDisable, setIsDisable] = useState(false);
  const [autoplayTimeLeft, setAutoplayTimeLeft] = useState(13000);
  const [progress, setProgress] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const [slides, setSlides] = useState([
    {
      id: 1,
      direction: "",
    },
  ]);

  const newIndex = (value) => {
    const numSlides = Number(slidesInfo.length);
    if (value < 1) {
      value = numSlides;
    }
    if (value > numSlides) {
      value = 1;
    }
    setActiveSlide(value);
    return value;
  };

  const handlePrev = () => {
    if (isDisable) {
      return;
    }

    setAutoplayTimeLeft(13000);
    setCurrentTime(0);
    setIsDisable(true);
    setPreviousSlide(activeSlide);
    const index = newIndex(activeSlide - 1);

    setSlides([{ id: index, direction: "left" }]);
    setTimeout(() => {
      setIsDisable(false);
    }, 3000);
  };

  const handleNext = () => {
    if (isDisable) {
      return;
    }

    setAutoplayTimeLeft(13000);
    setCurrentTime(0);
    setIsDisable(true);
    setPreviousSlide(activeSlide);
    const index = newIndex(activeSlide + 1);

    setSlides([{ id: index, direction: "right" }]);
    setTimeout(() => {
      setIsDisable(false);
    }, 3000);
  };

  const handleDot = (event) => {
    const slideIndex = Number(event.target.id.slice(-1));
    if (isDisable || Number(slideIndex) === activeSlide) {
      return;
    }
    setAutoplayTimeLeft(13000);
    setCurrentTime(0);
    setIsDisable(true);
    setPreviousSlide(activeSlide);
    const index = newIndex(slideIndex);
    const direction = index < activeSlide ? "left" : "right";
    setSlides([{ id: index, direction }]);
    setTimeout(() => {
      setIsDisable(false);
    }, 3000);
  };

  useEffect(() => {
    const numSlides = Number(slidesInfo.length);
    const dots = document.querySelector(".container-dots-main");
    dots.style.setProperty("--widthdots", `${40 * numSlides}px`);
    dots.style.setProperty("--margindots", `-${20 * numSlides}px`);
    const dots1 = document.querySelector(".dots-mobile");
    dots1.style.setProperty("--widthdotsmobile", `${20 * numSlides}px`);
    dots1.style.setProperty("--margindotsmobile", `-${10 * numSlides}px`);
    return () => {};
  }, []);

  let ini = null;

  const handleMouseDown = (event) => {
    ini = event.clientX;
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (event) => {
    var valorAbsoluto = Math.abs(ini - event.clientX);
    if (valorAbsoluto >= 2) {
      if (ini - event.clientX < 0) {
        handlePrev();
      } else {
        handleNext();
      }

      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!document.hidden) {
        if (autoplayTimeLeft > 0) {
          setAutoplayTimeLeft(autoplayTimeLeft - 1000);
        } else {
          handleNext();
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [autoplayTimeLeft]);

  useEffect(() => {
    const duration = 13000;
    const frameRate = 60;

    const intervalId = setInterval(() => {
      const progressCircle = document.getElementById(
        `contador-id-${activeSlide}`
      );
      if (!document.hidden) {
        if (progressCircle) {
          setProgress(true);
          if (progress) {
            const newCurrentTime = currentTime + 1000 / frameRate;
            setCurrentTime(newCurrentTime);
            const elapsed = newCurrentTime / duration;
            if (progressCircle) {
              progressCircle.style.setProperty("--progress", elapsed);
            }
          }
        }
      } else {
        setProgress(false);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime]);

  useEffect(() => {
    if (previousSlide) {
      const progressCircle = document.getElementById(
        `contador-id-${previousSlide}`
      );
      if (progressCircle) {
        progressCircle.style.setProperty("--progress", 1);
      }
      setAutoplayTimeLeft(13000);
      setCurrentTime(0);
    }

    return () => {};
  }, [activeSlide]);

  return (
    <>
      <div className="relative">
        <div
          className="slider-mobile"
          ref={refSlider}
          onMouseDown={handleMouseDown}
        >
          {previousSlide ? (
            <>
              <div
                key={`slide-id-active`}
                className={`slide-mobile slide-mobile-${previousSlide}`}
              ></div>
              <h2 className="title-mobile">
                {slidesInfo[previousSlide - 1].title}
              </h2>
            </>
          ) : (
            <></>
          )}
          {slides.map((slide) => (
            <>
              <div
                key={`slide-id-${slide.id}`}
                className={`slide-mobile slide-mobile-${slide.id}`}
              ></div>
              <h2 className={`title-mobile`}>
                {slidesInfo[slide.id - 1].title}
              </h2>
            </>
          ))}
        </div>

        <div className="dots-mobile block">
          <div className="dots-mobile-container">
            {slidesInfo.map((value, index) => (
              <div
                className={`w-4 h-4 bg-white rounded-full cursor-pointer ${
                  activeSlide === index + 1 ? "" : "opacity-50"
                }`}
                key={`dot-mobile-${index + 1}`}
                id={`dot-id-mobile-${index + 1}`}
                onClick={handleDot}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
