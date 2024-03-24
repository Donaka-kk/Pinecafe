import Menu from "../Components/Menu/Menu";
import WorkHours from "../Components/WorkHours/WorkHours";
import NavBar from "../Components/Layouts/NavBar";
import Footer from "../Components/Layouts/Footer";
import tempImage from "../utilities/bg-pic.avif";
import SupaBase from "../SupaBase/SupaBase";
import { useState, useEffect } from "react";

const Home = () => {
  const [breakfasts, setBreakfasts] = useState();
  const [hotdrinks, setHotdrinks] = useState();
  const [colddrinks, setColddrinks] = useState();

  useEffect(() => {
    const breakfastsData = async () => {
      const { data } = await SupaBase().from("breakfasts").select("*");
      setBreakfasts(data);
    };
    breakfastsData();

    const hotdrinksData = async () => {
      const { data } = await SupaBase().from("hotdrinks").select("*");
      setHotdrinks(data);
    };
    hotdrinksData();

    const colddrinksData = async () => {
      const { data } = await SupaBase().from("colddrinks").select("*");
      setColddrinks(data);
    };
    colddrinksData();
  }, []);

  return (
    <div className="min-w-screen h-screen font-georgia ">
      <div className="w-full min-h-24 h-[16vh]">
        <NavBar />
      </div>

      <div className="min-w-screen min-h-[61vh] flex flex-col items-center">
        <div className="w-full h-44 sm:h-52 md:h-72 lg:h-96 mt-10 border">
          <img
            src={tempImage}
            alt="wallpaper"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-9/12 mt-10">
          <WorkHours />
        </div>
        <div className="w-9/12 md:w-9/12 h-10/12 mt-10">
          {breakfasts && hotdrinks && colddrinks ? (
            <Menu
              breakfasts={breakfasts}
              hotdrinks={hotdrinks}
              colddrinks={colddrinks}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
