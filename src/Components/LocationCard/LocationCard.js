import { Link } from "react-router-dom";

const LocationCard = ({
  name,
  address,
  phone,
  availability,
  image,
  mapLink,
}) => {
  return (
    <div className="relative border-2 border-black rounded-md w-64 h-64">
      <div className="absolute w-full h-full z-10">
        <img src={image} alt="bgImage" className="w-full h-full" />
      </div>
      <div className="relative flex flex-col w-full h-full justify-center items-center z-50 gap-3 text-white bg-transparent02 text-lg">
        <p className="font-semibold">{name}</p>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{availability ? "Open" : "Close"}</p>
        <Link
          to={mapLink}
          className="border border-black rounded-md text-black px-2 py-1 bg-white"
        >
          Open Map
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
