import { useEffect, useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Carousel } from "@material-tailwind/react";

import Slider from "./Slider/Slider";

const Banner = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch(`/Destinations.json`)
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  return (
    <div>
      <div className="relative bg-black ">
        <img
          className="h-[100vh] w-full opacity-45  "
          src="https://i.imgur.com/7KzQNMh.jpg"
          alt=""
        />
      </div>
      <div className="absolute flex  gap-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Carousel className="rounded-xl">
          {sliderData.map((data) => (
            <Slider key={data.id} data={data}></Slider>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-0 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
};

export default Banner;
