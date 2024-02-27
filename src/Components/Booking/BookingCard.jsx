import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const books = useLoaderData();

  const { id } = useParams();

  const result = books.find((book) => book.id == id);
  const { name, description } = result || "";

  return (
    <div className="flex gap-20">
      <div>
        <h1 className="text-7xl font-bold text-white">{name}</h1>
        <p className=" my-7 text-white">{description}</p>
      </div>
      <div>
        <Card className="w-96">
          <CardBody className="flex flex-col gap-4">
            <div className="space-y-2">
              <h1>Origin</h1>
              <Input
                className="bg-gray-200"
                label="origin"
                size="lg"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="space-y-2">
              <h1>Destination</h1>
              <Input
                className="bg-gray-200"
                label="destination"
                size="lg"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="flex gap-3">
              <div className="space-y-2">
                <h1>From</h1>
                <DatePicker
                  className="w-40 bg-gray-200 rounded-lg"
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="space-y-2">
                <h1>To</h1>
                <DatePicker
                  className="w-40 bg-gray-200 rounded-lg"
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`/Hotel/${id}`}>
              <Button className="bg-[#F9A51A] text-black " fullWidth>
                Start Booking
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BookingCard;
