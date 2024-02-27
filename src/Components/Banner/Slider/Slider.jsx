import { Button } from "@material-tailwind/react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Slider = ({ data }) => {
  const { id, name, img, description } = data || "";
  return (
    <div>
      <div className="flex justify-between items-center px-24 py-56">
        <div>
          <h1 className="text-7xl font-bold text-white">{name}</h1>
          <p className="max-w-xl my-7 text-white">
            {description.slice(0, 300)}...
          </p>
          <Link to={`/Booking/${id}`}>
            <Button className="bg-[#F9A51A] px-5 py-2 text-black new text-lg font-bold">
              <span className="flex gap-2 items-center">
                Booking <GoArrowRight />
              </span>
            </Button>
          </Link>
        </div>
        <img
          className=" w-64 border-4 rounded-3xl border-[#FBBC04] "
          src={img}
        ></img>
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.node,
};

export default Slider;
