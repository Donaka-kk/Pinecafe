import NavBar from "../Components/Layouts/NavBar";
import Footer from "../Components/Layouts/Footer";
import LocationCard from "../Components/LocationCard/LocationCard";

const Location = () => {
  return (
    <div className="min-w-screen h-screen font-georgia">
      <div className="w-full min-h-24 h-[16vh]">
        <NavBar />
      </div>

      <div className="min-w-screen min-h-[61vh] flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <LocationCard
          name={"Mehrshahr branch"}
          address={"blvd 34"}
          phone={"213453456"}
          availability={true}
          image={
            "https://ak-d.tripcdn.com/images/1mi2p2234d4wqibhd62C5.jpg?proc=source/trip"
          }
          mapLink={"https://maps.app.goo.gl/Gp9gPByuQcVRBMG38"}
        />
        <LocationCard
          name={"Karaj branch"}
          address={"Azimieh , khayam blvd"}
          phone={"21345321356"}
          availability={true}
          image={
            "https://64.media.tumblr.com/996d6bc781e0dbee8c06e996980eb55e/b28e8f99faf0eb6b-8d/s540x810/dd26328eb636eddf7dde5721a8905f8fe7d8386c.jpg"
          }
          mapLink={"https://maps.app.goo.gl/CDG1kzLzu7iaRU5R9"}
        />
        <LocationCard
          name={"Fardis branch"}
          address={"4th blvd"}
          phone={"21312356"}
          availability={false}
          image={
            "https://travellemming.com/wp-content/uploads/Killebrew-Coffee.jpg"
          }
          mapLink={"https://maps.app.goo.gl/bQEpwxeMviwzVfGQ7"}
        />
      </div>

      <div className="flex flex-col mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Location;
