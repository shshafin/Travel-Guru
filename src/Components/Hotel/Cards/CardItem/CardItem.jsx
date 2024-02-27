import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-[#FFAF38]"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const CardItem = ({ data }) => {
  const { img, title, f1, f2, f3, rating, rated_people, price } = data;
  return (
    <div>
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-2 font-normal">
            {f1}
          </Typography>
          <Typography color="gray" className="mb-2 font-normal">
            {f2}
          </Typography>
          <Typography color="gray" className="mb-2 font-normal">
            {f3}
          </Typography>
          <Typography className="mb-2 flex gap-16 ">
            <span className="flex gap-1 items-center ">
              <StarIcon /> {rating} ({rated_people})
            </span>
            <span className="flex justify-center">
              <span className="font-bold text-black">${price}</span>/night
            </span>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

CardItem.propTypes = {
  data: PropTypes.node,
};

export default CardItem;
