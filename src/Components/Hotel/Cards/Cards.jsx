import { useLoaderData } from "react-router-dom";
import CardItem from "./CardItem/CardItem";

const Cards = () => {
  const datas = useLoaderData();

  return (
    <div className="flex flex-col gap-7 my-7">
      {datas.map((data) => (
        <CardItem key={data.id} data={data}></CardItem>
      ))}
    </div>
  );
};

export default Cards;
