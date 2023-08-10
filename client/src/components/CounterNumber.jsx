import React, { useEffect } from "react";

const CountUpAnimation = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 3000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);

  return (
    <div className="wrapper">
      <div
        className="container"
        style={{ border: "4px solid rgb(255, 99, 132)" }}
      >
        <i className="fas fa-utensils"></i>
        <span
          className="num"
          data-val="250"
          style={{ color: "rgb(255, 99, 132)" }}
        >
          000
        </span>
        <span className="text" style={{ color: "rgb(255, 99, 132)" }}>
          January
        </span>
      </div>
      <div
        className="container"
        style={{ border: "4px solid rgb(255, 159, 64)" }}
      >
        <i className="fas fa-utensils"></i>
        <span
          className="num"
          data-val="159"
          style={{ color: " rgb(255, 159, 64)" }}
        >
          000
        </span>
        <span className="text" style={{ color: " rgb(255, 159, 64)" }}>
          Febuary
        </span>
      </div>
      <div
        className="container"
        style={{ border: "4px solid rgb(255, 205, 86)" }}
      >
        <i className="fas fa-utensils"></i>
        <span
          className="num"
          data-val="280"
          style={{ color: "rgb(255, 205, 86)" }}
        >
          000
        </span>
        <span className="text" style={{ color: "rgb(255, 205, 86)" }}>
          March
        </span>
      </div>
      <div
        className="container"
        style={{ border: "4px solid rgb(75, 192, 192)" }}
      >
        <i className="fas fa-utensils"></i>
        <span
          className="num"
          data-val="181"
          style={{ color: "rgb(75, 192, 192)" }}
        >
          000
        </span>
        <span className="text" style={{ color: "rgb(75, 192, 192)" }}>
          April
        </span>
      </div>
    </div>
  );
};

export default CountUpAnimation;
