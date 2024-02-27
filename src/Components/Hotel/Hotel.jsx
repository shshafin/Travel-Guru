import { useEffect, useState } from "react";
import DummyNav from "./DummyNav";
import { useParams } from "react-router-dom";
import Cards from "./Cards/Cards";
import { Map, Marker } from "pigeon-maps";

const Hotel = () => {
  const [spotName, setSpotName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/Destinations.json`)
      .then((res) => res.json())
      .then((data) => setSpotName(data));
  }, []);

  const mainName = spotName.find((spot) => spot.id == id);
  const { name } = mainName || "";

  return (
    <div>
      <DummyNav></DummyNav>
      <div className="grid grid-cols-2 gap-24 mx-8">
        <div className="grid col-span-1  ">
          <h1 className="text-[#2B2B2B] font-medium mb-3">
            252 stays Apr 13-17 3 guests
          </h1>
          <h1 className="text-3xl text-[#2B2B2B] font-bold">stay in {name}</h1>
          <Cards></Cards>
        </div>
        <div className="grid col-span-1 mx-5 ">
          {id == 1 ? (
            <Map
              height={700}
              defaultCenter={[21.4491, 91.9685]}
              defaultZoom={11}
            >
              <Marker width={50} anchor={[21.4491, 91.9685]} />
            </Map>
          ) : (
            ""
          )}
          {id == 2 ? (
            <Map
              height={700}
              defaultCenter={[24.3083, 91.7471]}
              defaultZoom={11}
            >
              <Marker width={50} anchor={[24.3083, 91.7471]} />
            </Map>
          ) : (
            ""
          )}
          {id == 3 ? (
            <Map
              height={700}
              defaultCenter={[22.0051, 89.8447]}
              defaultZoom={11}
            >
              <Marker width={50} anchor={[22.0051, 89.8447]} />
            </Map>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
