import MenuBar from "../MenuBar/MenuBar";
import BookingCard from "./BookingCard";

const Booking = () => {
  return (
    <div>
      <div className="relative bg-black ">
        <img
          className="h-[100vh] w-full opacity-45  "
          src="https://i.imgur.com/7KzQNMh.jpg"
          alt=""
        />
      </div>
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <BookingCard></BookingCard>
      </div>

      <div className="absolute top-0 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
};

export default Booking;
