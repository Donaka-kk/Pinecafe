import { useEffect, useState } from "react";
import hotdrink from "../../utilities/hotdrink.jpg";
import colddrink1 from "../../utilities/colddrink1.webp";
import breakfast from "../../utilities/breakfast.jpg";

const Menu = (props) => {
  const [breakfasts, setBreakfasts] = useState();
  const [hotdrinks, setHotdrinks] = useState();
  const [colddrinks, setColddrinks] = useState();

  const [menuCategory, setMenuCategory] = useState("Hot Drinks");
  const [categoryItems, setCategoryItems] = useState();
  useEffect(() => {
    setBreakfasts(props.breakfasts);
    setHotdrinks(props.hotdrinks);
    setColddrinks(props.colddrinks);

    setCategoryItems(props.hotdrinks);
  }, []);

  return (
    <div className="container flex flex-row-reverse text-sm md:text-base h-[80vh] rounded-md bg-gray-200">
      <div className="categories w-52 h-full border-l border-black py-2">
        <ul className="flex flex-col h-full justify-around overflow-auto px-1">
          <li>
            <button
              className="relative w-full"
              onClick={() => {
                setMenuCategory("Hot Drinks");
                setCategoryItems(hotdrinks);
              }}
            >
              <img
                src={hotdrink}
                alt="hotDrink"
                className="border border-black rounded-md"
              />
              <div
                className={`absolute w-full h-full top-0 text-white bg-transparent04 flex justify-center items-center border-md rounded-md ${
                  menuCategory === "Hot Drinks" ? "opacity-0" : "opacity-100"
                } ease-in-out duration-[750ms]`}
              >
                Hot Drinks
              </div>
            </button>
          </li>
          <li>
            <button
              className="relative w-full"
              onClick={() => {
                setMenuCategory("Cold Drinks");
                setCategoryItems(colddrinks);
              }}
            >
              <img
                src={colddrink1}
                alt="coldDrink"
                className="border border-black rounded-md"
              />
              <div
                className={`absolute w-full h-full top-0 text-white bg-transparent04 flex justify-center items-center border-md rounded-md ${
                  menuCategory === "Cold Drinks" ? "opacity-0" : "opacity-100"
                } ease-in-out duration-[750ms]`}
              >
                Cold Drinks
              </div>
            </button>
          </li>
          <li>
            <button
              className="relative w-full"
              onClick={() => {
                setMenuCategory("Breakfasts");
                setCategoryItems(breakfasts);
              }}
            >
              <img
                src={breakfast}
                alt="breakfast"
                className="border border-black rounded-md"
              />
              <div
                className={`absolute w-full h-full top-0 text-white bg-transparent04 flex justify-center items-center border-md rounded-md ${
                  menuCategory === "Breakfasts" ? "opacity-0" : "opacity-100"
                } ease-in-out duration-[750ms]`}
              >
                Breakfasts
              </div>
            </button>
          </li>
        </ul>
      </div>

      {/* {categoryItems.map((elem, index) => {
            return (
              <li
                className="flex flex-row justify-between w-full px-2 py-1"
                key={index}
              >
                <div>
                  <p className="text-sm md:text-base font-semibold">
                    {elem.name}
                  </p>
                  <p className="text-xs md:text-sm text-slate-800">
                    {elem.description}
                  </p>
                </div>
                <p className="font-bold">${elem.price}</p>
              </li>
            );
          })} */}

      <div className="items w-full h-full">
        <ul className="flex flex-col h-full border-8 border-transparent md:px-4 overflow-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thumb-black scrollbar-track-gray-400">
          <p className="text-center text-2xl mb-2">{menuCategory}</p>
          {categoryItems && (
            <div>
              {categoryItems.map((elem, index) => {
                return (
                  <li
                    className="flex flex-row justify-between w-full px-2 py-1"
                    key={index}
                  >
                    <div>
                      <p className="text-sm md:text-base font-semibold">
                        {elem.name}
                      </p>
                      <p className="text-xs md:text-sm text-slate-800">
                        {elem.description}
                      </p>
                    </div>
                    <p className="font-bold">${elem.price}</p>
                  </li>
                );
              })}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
