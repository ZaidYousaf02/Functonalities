import React from "react";
import Imagecarousel from "../components/Imagecarousel";

function Slider() {
  const imageUrls = [
    "https://tse4.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.aqSVE7TUcbsLCQdF_FPfRgHaEK&pid=Api&P=0&h=180",
  ];
  return (
    <>
      <Imagecarousel images={imageUrls} />
    </>
  );
}

export default Slider;
