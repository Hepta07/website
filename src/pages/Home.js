import React, { useEffect, useState } from "react";
import lottie from "lottie-web"; // Import lottie
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactBeforeSliderComponent from "react-after-before-slider";
import "react-after-before-slider/dist/build.css";
import animationData from "../assets/hero-anim-2.json";
import swipeAnimationData from "../assets/swipe.json";

const cwOldImg = {
  imageUrl: require("../assets/img/Ceylon-wedding-old.png"),
};
const cwNewImg = {
  imageUrl: require("../assets/img/Ceylon-wedding-new.png"),
};

const Home = () => {
  const [borderAnimation, setBorderAnimation] = useState(false);
  const [swipeAnimationInstance, setSwipeAnimationInstance] = useState(null);
  const [isSwipeContainerVisible, setIsSwipeContainerVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const swipeAnimationContainer = document.getElementById(
      "swipe-lottie-container"
    );

    if (swipeAnimationContainer) {
      const swipeInstance = lottie.loadAnimation({
        container: swipeAnimationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: swipeAnimationData,
        speed: 0.5,
      });

      setSwipeAnimationInstance(swipeInstance);
      return () => swipeInstance.destroy();
    }
  }, []);
  useEffect(() => {
    const animationContainer = document.getElementById("lottie-container");

    if (animationContainer) {
      const instance = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
        speed: 0.5,
      });

      return () => instance.destroy();
    }

    setTimeout(() => {
      setBorderAnimation(true);
    }, 0);
  }, []);

  const handleMediaElementClick = () => {
    setIsSwipeContainerVisible(false);
  };

  return (
    <>
      <a href="/">
        <img
          src={require("../assets/img/heptalogo3.png")}
          alt="Hepta"
          className="d-block mx-auto w-[80px] mt-5 xl:w-[150px] "
        />
      </a>
      <div>
        <section className="hero mx-auto w-screen mb-30 lg:mb-40">
          <div
            id="lottie-container"
            className="absolute top-0 left-0 w-screen h-screen -z-50 opacity-30"
          ></div>
          <div className="xl:container mx-auto h-full">
            <div className="px-10 text-[#4f4f4f] w-full">
              <h1
                className="text-[55px] my-7 lg:my-0 md:text-[120px] xl:text-[200px] font-thin"
                data-aos="fade-right"
              >
                Turn <span className="font-medium text-black">your</span>
              </h1>
            </div>

            <div
              className={`border ${borderAnimation ? "border-animation" : ""}`}
            ></div>
            <div className="px-10 text-[#4f4f4f] w-full text-right">
              <h1
                className="text-[55px] my-7 lg:my-0 md:text-[120px] xl:text-[200px] font-thin"
                data-aos="fade-left"
              >
                <span className="font-medium text-black">ideas</span> into
              </h1>
            </div>
            <div
              className={`border ${borderAnimation ? "border-animation" : ""}`}
            ></div>
            <div className="px-10 text-[#4f4f4f] w-full">
              <h1
                className="text-[55px] my-7 lg:my-0 md:text-[120px] xl:text-[200px] font-thin"
                data-aos="fade-right"
              >
                <span className="font-medium text-black">reality</span> today
              </h1>
            </div>
            <div
              className={`border ${borderAnimation ? "border-animation" : ""}`}
            ></div>
          </div>
        </section>

        <section className="pb-10 my-20 px-4 xl:px-0">
          <div className="container mx-auto">
            <div class="flex justify-around items-center">
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/Ceylon-Wedding.png")}
                  className="w-[100px] sm:w-[180px] lg:w-[250px] opacity-30 hover:opacity-100"
                  alt=""
                />
                <span class="ml-14 tooltip shadow-lg p-2 rounded-[10px] bg-gray-100 mt-2 mx-auto">
                  Work in progress
                </span>
              </div>
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/Royal Enfield.png")}
                  className="invert w-[100px] sm:w-[180px] lg:w-[250px] opacity-25 hover:opacity-100"
                  alt=""
                />
                <span class="ml-10 tooltip shadow-lg p-2 rounded-[10px] bg-gray-100 mt-2 mx-auto">
                  Work in progress
                </span>
              </div>
              <div class="has-tooltip">
                <img
                  src={require("../assets/img/yarn-logo.jpg")}
                  className="w-[100px] sm:w-[180px] lg:w-[250px] opacity-30 hover:opacity-100"
                  alt=""
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
              Our Work
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Work
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Work
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Work
            </h2>
          </Marquee>

          <div className="container mx-auto my-20">
            <div
              className="project-info lg:flex items-center mb-20"
              data-aos="fade-up"
            >
              <img
                src={require("../assets/img/Ceylon-Wedding.png")}
                alt="Ceylon Wedding"
                className="lg:border-r-2 lg:border-r-[#dddddd] lg:pr-10 w-[180px] xl:w-[250px]"
              />
              <div className=" pt-10 lg:pt-0 lg:pl-10">
                <p className="text-[16px]">
                  Ceylon Wedding, recognizing the importance of an outstanding
                  user experience for its community, has chosen Hepta, to create
                  a cutting-edge web application. This strategic partnership
                  aims to elevate Ceylon Wedding's online presence, enhance user
                  engagement, and establish itself as a leader in the digital
                  space for weddings, ensuring a seamless and enjoyable
                  experience for users throughout their wedding planning
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="media-element container mx-auto relative"
          data-aos="fade-up"
          onClick={handleMediaElementClick}
        >
          {isSwipeContainerVisible && (
            <div
              id="swipe-lottie-container"
              className="absolute top-[65%] sm:top-[55%] lg:top-[52%] left-[18%] w-[150px] lg:w-[250px] z-50 opacity-90"
            ></div>
          )}
          <ReactBeforeSliderComponent
            secondImage={cwOldImg}
            firstImage={cwNewImg}
            currentPercentPosition={25}
            withResizeFeel={true}
          />
        </div>

        <section className="bg-[#131313] text-[#fff] font-thin">
          <div className="container text-[55px] px-4 lg:px-10 xl:px-0 lg:text-[80px] xl:text-[120px] mx-auto py-40 ">
            <h2 data-aos="fade-up">
              We <span className="font-semibold">align</span> both{" "}
              <span className="font-semibold">user experiences</span> and{" "}
              <span className="font-semibold">business goals</span> while
              providing solutions on time
            </h2>
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
              Our Services
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Services
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Our Services
            </h2>
          </Marquee>

          <div className="container mx-auto">
            <div className="lg:flex gap-4">
              <div className="lg:flex gap-4 flex-col my-4 lg:my-16">
                <div
                  className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] h-full justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/ui-ux.png")}
                    width={"50px"}
                    alt="UI/UX Design"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">UI/UX Design</h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    Craft intuitive interfaces and user journeys that drive
                    engagement and results.
                  </p>
                </div>
                <div
                  className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/seo.svg").default}
                    width={"50px"}
                    alt="Search Engine Optimiztion"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">SEO</h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    Get your website found and attract qualified leads with our
                    data-driven SEO strategies.
                  </p>
                </div>
              </div>
              <div className="lg:flex gap-4 flex-col my-4 lg:my-16">
                <div
                  className="bg-[#f3f3f3] lg:flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/research.svg").default}
                    width={"50px"}
                    alt="User Research"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">User Research</h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    Gain actionable insights into user needs and behaviors to
                    build products people love.
                  </p>
                </div>
                <div
                  className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] h-full justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/software.svg").default}
                    width={"50px"}
                    alt="Software Development"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">
                    Software Development
                  </h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    From concept to deployment, we develop tailored software
                    applications that solve your unique challenges.
                  </p>
                </div>
              </div>
              <div className="lg:flex gap-4 flex-col my-4 lg:my-16">
                <div
                  className="bg-[#f3f3f3] lg:flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/pm.svg").default}
                    width={"50px"}
                    alt="Project Management"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">
                    Project Maintenance
                  </h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    We bring order to chaos, ensuring your projects are
                    completed successfully and efficiently.
                  </p>
                </div>
                <div
                  className="bg-[#f3f3f3] flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/web.svg").default}
                    width={"50px"}
                    alt="Web Development"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">
                    Web Development
                  </h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    We build modern, responsive websites that deliver
                    exceptional user experiences and drive results.
                  </p>
                </div>
                <div
                  className="bg-[#f3f3f3] lg:flex flex-col gap-2 py-20 px-10 my-4 lg:my-0 rounded-[10px] justify-center"
                  data-aos="fade-up"
                >
                  <img
                    src={require("../assets/img/branding.svg").default}
                    width={"50px"}
                    alt="Branding"
                  />
                  <h4 className="text-[24px] lg:text-[34px]">Branding</h4>
                  <p className="text-[13px] lg:text-[18px] font-thin">
                    We help you define your brand story, create a consistent
                    brand identity, and connect with your target audience.
                  </p>
                </div>
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
              Why choose Hepta
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Why choose Hepta
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Why choose Hepta
            </h2>
          </Marquee>

          <div className="container mx-auto my-16">
            <video autoPlay muted controls loop className="rounded-[20px]">
              <source
                src={require("../assets/rimaz-intro.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <Header />
      </div>

      {/* <section className="my-20 px-4 xl:px-0">
        <Marquee play={true} direction="right" speed={100} pauseOnHover={true}>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Customer Stories
          </h2>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Customer Stories
          </h2>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Customer Stories
          </h2>
        </Marquee>

        <div className="container mx-auto my-16">
          <iframe
            className="w-full h-[25vh] md:h-[70vh] rounded-[20px]"
            src="https://www.youtube.com/embed/2ZZl0gIrzE4?si=tW8a5QPUO0f9h_Aa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            data-aos="fade-up"
          ></iframe>
        </div>
      </section> */}

      {/* <section className="my-20 px-4 xl:px-0">
        <Marquee play={true} direction="right" speed={100} pauseOnHover={true}>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Learn About Us
          </h2>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Learn About Us
          </h2>
          <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
            Learn About Us
          </h2>
        </Marquee>

        <div className="container mx-auto my-16">
          <div className="md:flex w-full gap-10">
            <div className="w-full mb-4 md:mb-0" data-aos="fade-up">
              <div className="mb-2">
                <img
                  src={require('../assets/img/blog-1.png')}
                  className="rounded-[20px] mb-5 font-bolder w-full"
                  alt=""
                  srcset=""
                />
                <h3 className="text-[24px]">
                  Hepta teams industrial management procedures
                </h3>
              </div>
              <a href="http://" className="text-[#001AFF]">
                Read more
              </a>
            </div>
            <div className="w-full mb-4 md:mb-0" data-aos="fade-up">
              <div className="mb-2">
                <img
                  src={require('../assets/img/blog-2.png')}
                  className="rounded-[20px] mb-5 font-bolder w-full"
                  alt=""
                  srcset=""
                />
                <h3 className="text-[24px]">
                  User experience and Client Business Idea Alignment
                </h3>
              </div>
              <a href="http://" className="text-[#001AFF]">
                Read more
              </a>
            </div>
            <div className="w-full mb-4 md:mb-0" data-aos="fade-up">
              <div className="mb-2">
                <img
                  src={require('../assets/img/blog-3.png')}
                  className="rounded-[20px] mb-5 font-bolder w-full"
                  alt=""
                  srcset=""
                />
                <h3 className="text-[24px]">
                  User experience and Client Business Idea Alignment
                </h3>
              </div>
              <a href="http://" className="text-[#001AFF]">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Home;
