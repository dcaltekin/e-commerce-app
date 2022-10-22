import React from "react";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className=" p-0 md:p-0 z-50 overflow-x-hidden">
      <Slider {...settings}>
        <div>
          <img
            className="h-96 object-cover object-top w-full overflow-x-hidden "
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt="s"
          />
        </div>
        <div>
          <img
            className="h-96 object-cover object-right-top md:object-top w-full"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt="s"
          />
        </div>
        <div>
          <img
            className="h-96 object-cover object-right-top md:object-top w-full overflow-x-hidden"
            src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
            alt="s"
          />
        </div>
      </Slider>
    </div>
  );
}

export default TopSlider;
