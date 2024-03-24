import NavBar from "../Components/Layouts/NavBar";
import Footer from "../Components/Layouts/Footer";
import Cafe from "../utilities/cafe.jpg";

const AboutUs = () => {
  return (
    <div className="min-w-screen h-screen font-georgia">
      <div className="w-full min-h-24 h-[16vh]">
        <NavBar />
      </div>

      <div className="min-w-screen min-h-[61vh] flex flex-col items-center">
        <div className="flex flex-col justify-center items-center w-full md:w-[80%] bg-gray-300 rounded-md px-10 py-3">
          <img
            src={Cafe}
            alt="cafe"
            className="w-full sm:w-[80%] h-80 object-cover"
          />
          <div className="flex flex-col md:flex-row gap-5 px-5">
            <p className="w-full md:w-1/2 mt-4 md:mt-7">
              Buffer started as a Startup Sprint project in November 2010 to
              solve a problem our Founder and CEO Joel Gascoigne was
              experiencing — he wanted to space out when his tweets were sent.
              The idea gained hundreds of users within the first few months and
              eventually grew to add social networks, to go beyond purely
              publishing to social media into analytics, engagement, and even to
              building micro sites. Today, Buffer is one of the most well-known
              social media marketing softwares serving small businesses,
              creators, and individuals.
            </p>
            <p className="w-full md:w-1/2 my-4 md:my-7">
              The Buffer team was initially just a few people working on a
              project they believed in, and steadily started growing after the
              founders joined an accelerator in August 2011. Over the next few
              years, Buffer teammates joined from wherever they were based as
              Buffer’s founders traveled and built Buffer. In 2013, we decided
              to commit to being a fully remote and distributed team, giving up
              our office space. That decision marked just one example of the
              Buffer team choosing our own path with how we operate as we build
              Buffer .
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <img
              src={
                "https://www.canberratimes.com.au/images/transform/v1/crop/frm/156151628/ff79967e-bec2-4f25-a590-3a5bebaafbc0.jpg/r19_0_4171_2336_w1200_h678_fmax.jpg"
              }
              alt="qwerty"
              className="w-full sm:w-[80%] md:w-1/2 object-cover"
            />
            <img
              src={
                "https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2018/12/m1n985-1.webp"
              }
              alt="qwerty"
              className="w-full sm:w-[80%] md:w-1/2 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
