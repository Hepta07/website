import { useEffect } from "react";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="The UX bridge between you and your company's vision"
        />

        <link rel="canonical" href="/about" />
      </Helmet>
      <a href="/">
        <img
          src={require("../assets/img/heptalogo3.png")}
          alt="Hepta"
          title="Hepta"
          className="d-block mx-auto w-[80px] mt-5 xl:w-[150px] "
        />
      </a>
      <div>
        <section className="my-20 px-4 xl:px-0">
          <div className="container mx-auto">
            <div class="lg:grid grid-cols-2 gap-4 content-center">
              <div data-aos="fade-up">
                <h1 className="text-[55px] xl:text-[70px]">
                  Crafting joyful <br /> journeys
                </h1>
                <div className="text-[16px] lg:text-[20px] font-light mt-2 mb-8 text-[#6e6e6e]">
                  Our team at Hepta is more than just a collection of
                  individuals. We are a finely tuned orchestra melody to the
                  symphony of success. With diverse backgrounds and expertise
                  spanning across software engineering, design, marketing,
                  finance, and management. <br /> We are united by a shared
                  passion to create something truly remarkable.
                </div>
                <img
                  src={require("../assets/img/co-founder-sign.png")}
                  className="w-[250px] saturate-200"
                  alt="Co-founder Sign"
                  title="Co-founder Sign"
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src={require("../assets/img/Coworking-pana .svg").default}
                  alt="Teamwork is Key"
                  title="About Hero"
                  className="w-full object-cover object-top rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 my-20 px-4 xl:px-0">
          <div className="container mx-auto">
            <div class="flex justify-around items-center">
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/Ceylon-Wedding.png")}
                  className="w-[100px] sm:w-[180px] lg:w-[250px] opacity-30 hover:opacity-100"
                  alt="Ceylon Wedding"
                  title="Ceylon Wedding"
                />
                <span class="ml-14 tooltip shadow-lg p-2 rounded-[10px] bg-gray-100 mt-2 mx-auto">
                  Work in progress
                </span>
              </div>
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/Royal Enfield.png")}
                  className="invert w-[100px] sm:w-[180px] lg:w-[250px] opacity-25 hover:opacity-100"
                  alt="Royal Enfield"
                  title="Royal Enfield"
                />
                <span class="ml-10 tooltip shadow-lg p-2 rounded-[10px] bg-gray-100 mt-2 mx-auto">
                  Work in progress
                </span>
              </div>
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/yarn-logo.jpg")}
                  className="w-[100px] sm:w-[180px] lg:w-[250px] opacity-30 hover:opacity-100"
                  alt="Yarn Clothing"
                  title="Yarn Clothing"
                />
                <span class="ml-14 tooltip shadow-lg p-2 rounded-[10px] bg-gray-100 mt-2 mx-auto">
                  Work in progress
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 px-4 xl:px-0">
          <Marquee
            play={true}
            direction="right"
            speed={100}
            pauseOnHover={true}
          >
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Core Values
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Core Values
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Core Values
            </h2>
          </Marquee>
          <div className="container mx-auto my-5 lg:my-10 text-center">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 md:gap-4">
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Storytelling Brilliance</h2>
                <p className="font-light text-[#6e6e6e]">
                  Captivate users and build brand loyalty through compelling
                  narratives that resonate and inspire.
                </p>
              </div>
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Global Consciousness</h2>
                <p className="font-light text-[#6e6e6e]">
                  Embrace diversity and inclusion, actively seeking perspectives
                  from different backgrounds and cultures.
                </p>
              </div>
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Sustainable Hustle</h2>
                <p className="font-light text-[#6e6e6e]">
                  Prioritize long-term growth and environmental responsibility,
                  ensuring your business thrives while minimizing its footprint.
                </p>
              </div>
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Bold Innovation</h2>
                <p className="font-light text-[#6e6e6e]">
                  Embrace new ideas and disruptive technologies, constantly
                  pushing boundaries and seeking solutions beyond the
                  conventional
                </p>
              </div>
            </div>
            <div class="mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-4">
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Unleashing Potential</h2>
                <p className="font-light text-[#6e6e6e]">
                  Empower employees to reach their full potential, providing the
                  resources and support they need to grow and contribute their
                  unique strengths.
                </p>
              </div>
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Growth-Driven Learning</h2>
                <p className="font-light text-[#6e6e6e]">
                  Prioritize continuous learning and development, investing in
                  skills and knowledge to stay relevant and competitive.
                </p>
              </div>
              <div
                className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-2  lg:my-0 rounded-[10px] justify-center"
                data-aos="fade-up"
              >
                <h2 className="text-[32px]">Operational Excellence</h2>
                <p className="font-light text-[#6e6e6e]">
                  Continuously strive to optimize performance, eliminate waste,
                  and achieve exceptional efficiency in every aspect of the
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Header />
      </div>

      <Footer />
    </>
  );
};

export default About;
