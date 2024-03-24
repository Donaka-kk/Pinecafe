import NavBar from "../Components/Layouts/NavBar";
import Footer from "../Components/Layouts/Footer";

const NoPage = () => {
  return (
    <div className="min-w-screen h-screen font-georgia">
      <div className="w-full min-h-24 h-[16vh]">
        <NavBar />
      </div>

      <div className="min-w-screen min-h-[61vh] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mt-20 gap-7">
          <h1 className="text-5xl">404</h1>
          <p className="text-3xl">Page not found !</p>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default NoPage;
