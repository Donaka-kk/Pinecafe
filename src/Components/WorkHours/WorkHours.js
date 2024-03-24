import wallpaper from "../../utilities/wallpaper2.jpeg";

const HOW = () => {
  return (
    <div className="w-full flex flex-col md:items-center gap-7 md:flex-row justify-around">
      <div className="flex flex-col gap-4 font-semibold">
        <h1 className=" text-lg font-bold">PINE CAFE | MEHRSHAHR</h1>
        <div>
          <p>CAFE HOURS</p>
          <p>8am - 6pm , everyday</p>
        </div>
        <div>
          <p>KITCHEN HOURS</p>
          <p>8am - 4pm , everyday</p>
        </div>
      </div>
      <div className="h-full">
        <img
          src={wallpaper}
          alt="wallpaper"
          className="w-full h-full rounded-xl md:w-96"
        />
      </div>
    </div>
  );
};

export default HOW;
