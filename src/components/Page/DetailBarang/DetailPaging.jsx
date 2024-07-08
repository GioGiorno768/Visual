import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailPaging() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div>
        <span>{i + 1}</span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
  ];
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <h3>{slide}</h3>
        </div>
      ))}
    </Slider>
  );
}
