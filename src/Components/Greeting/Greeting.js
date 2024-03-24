const Greeting = () => {
  return (
    <div className="w-full h-full flex justify-center items-center top-0 bg-gray-600">
      <div className="bg-orange-200 w-4/12 px-2 py-5 flex flex-col items-center gap-5 md:w-3/12 md:gap-7">
        <img src={""} alt="logo" className="w-20 h-20 border-2 border-black" />
        <div>
          <p className="font-bold text-center text-3xl">Welcome to</p>
          <p className="font-bold text-center text-3xl">DasteBil cafe</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-center">
            WE ARE OPEN 7 DAYS A WEEK
          </p>
          <p className="text-lg font-bold">8AM-9PM</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
