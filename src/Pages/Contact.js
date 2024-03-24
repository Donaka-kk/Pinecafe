import NavBar from "../Components/Layouts/NavBar";
import Footer from "../Components/Layouts/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-w-screen h-screen font-georgia">
      <div className="w-full min-h-24 h-[16vh]">
        <NavBar />
      </div>

      <div className="min-w-screen min-h-[61vh] flex flex-col items-center justify-between">
        <h1 className="text-2xl my-5">GET IN TOUCH</h1>
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col justify-center items-center font-semibold">
              <div className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <p>ADDRESS</p>
            </div>
            <p>Mehrshahr , blvd 34</p>
            <p>Karaj , Azimieh , khayam blvd</p>
            <p>Fardis , 4th blvd</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col justify-center items-center font-semibold">
              <div className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <p>PHONE</p>
            </div>
            <p>Mehrshahr branch : 213453456</p>
            <p>Karaj branch : 21345321356</p>
            <p>Fardis branch : 21312356</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col justify-center items-center font-semibold">
              <div className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <p>Email</p>
            </div>
            <p>Cafe63Manager@gmail.com</p>
            <p>Cafe63official@gmail.com</p>
          </div>
        </div>

        <div className="my-10">
          <div className="flex flex-row gap-14">
            <div className="flex flex-col sm:flex-row gap-14">
              <Link
                to="https://instagram.com"
                className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full hover:cursor-pointer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
              <Link
                to="https://pinterest.com"
                className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full hover:cursor-pointer"
              >
                <ion-icon name="logo-pinterest"></ion-icon>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-14">
              <Link
                to="https://facebook.com"
                className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full hover:cursor-pointer"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
              <Link
                to="https://twitter.com"
                className="bg-gray-900 text-white flex justify-center items-center p-2 text-3xl rounded-full hover:cursor-pointer"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
