import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import ReactBeforeSliderComponent from "react-after-before-slider";
import "react-after-before-slider/dist/build.css";

const cwOldImg = {
  imageUrl: require("../../assets/img/Ceylon-wedding-old.png"),
  alt: "Old Ceylon Wedding",
  title: "Old Ceylon Wedding",
  loading: "lazy",
};

const cwNewImg = {
  imageUrl: require("../../assets/img/Ceylon-wedding-new.png"),
  alt: "Redesigned Ceylon Wedding",
  title: "Redesigned Ceylon Wedding",
  loading: "lazy",
};

const CeylonWedding = () => {
  const [swipeAnimationInstance, setSwipeAnimationInstance] = useState(null);
  const [isSwipeContainerVisible, setIsSwipeContainerVisible] = useState(true);

  const handleMediaElementClick = () => {
    setIsSwipeContainerVisible(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };

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
      <a
        href=""
        className="fixed left-[20px] lg:left-[70px] top-[20px] text-[16px] font-bold px-4 py-2 md:py-4 md:px-8 rounded-[100px] bg-[#000] text-[#fff] z-50 shadow-md"
      >
        <span className="mr-1">&#x2190;</span>
      </a>
      <a
        href="https://ceylonwedding.com/"
        target="_blank"
        className="fixed right-[20px] lg:right-[70px] bottom-[30px] text-[12px] md:text-[16px] font-bold py-4 px-6 rounded-[100px] bg-[#BA9713] text-[#fff] z-50 shadow-md"
      >
        Visit Ceylon Wedding
        <span className="ml-2 pt-4 align-top text-[12px]">&#x2197;</span>{" "}
      </a>
      <section className="px-4 lg:px-0 border-l-8 border-l-[#BA9713] lg:h-screen md:overflow-hidden">
        <div className="container mx-auto py-28 md:py-0">
          <div class="md:grid grid-cols-2 gap-2">
            <div className="h-100 my-auto" data-aos="fade-up">
              <h1 className="leading-none text-[80px] lg:text-[150px] text-[#BA9713] stroke-2 font-semibold">
                Ceylon Wedding
              </h1>
              <p className="text-[14px] md:text-[20px] my-4 md:my-8">
                A wedding planner for your amazing day. Connects vendors from
                all around the country
              </p>
              <a
                href="#case-study"
                className="text-[#BA9713] text-[14px]md:text-[24px] font-semibold"
              >
                {" "}
                Case Study{" "}
                <span className="text-[18px] align-middle ml-1">&#x2193;</span>
              </a>
            </div>

            <div className="mt-20 md:-mt-56">
              <img
                src={require("../../assets/img/Ceylon-wedding-new.png")}
                className="mb-8 opacity-20 hidden md:block"
              />
              <img
                src={require("../../assets/img/Ceylon-wedding-new.png")}
                className="mb-8 shadow-xl"
              />
              <img
                src={require("../../assets/img/Ceylon-wedding-new.png")}
                className="opacity-20 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 mt-20 py-20" id="case-study">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            About Ceylon Wedding
          </h2>
          <h2
            className="text-[30px] md:text-[40px] lg:text-[60px] leading-tight w-5/6"
            data-aos="fade-up"
          >
            A web platform that provides all necessary stuff for you to plan
            your wedding
          </h2>
          <div className="md:flex mt-8 gap-8">
            <div className="md:w-5/6">
              <p
                className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
                data-aos="fade-up"
              >
                Ceylon Wedding, recognizing the importance of an outstanding
                user experience for its community, has chosen Hepta, to create a
                cutting-edge web application. This strategic partnership aims to
                elevate Ceylon Wedding's online presence, enhance user
                engagement, and establish itself as a leader in the digital
                space for weddings, ensuring a seamless and enjoyable experience
                for users throughout their wedding planning journey.
              </p>

              <a
                href="https://ceylonwedding.com/"
                target="_blank"
                className="font-bold hover:text-[#5d98ff] text-[18px]"
                data-aos="fade-up"
              >
                Learn more <span className="">&#8594;</span>
              </a>
            </div>
            <div className="md:w-1/6 mt-8 md:mt-0">
              <div data-aos="fade-up">
                <h4 className="font-bold">CLIENT</h4>
                <p className="font-light">Ceylon Wedding</p>
              </div>
              <div className="mt-4" data-aos="fade-up">
                <h4 className="font-bold">DATE</h4>
                <p className="font-light">May 2023 - Feb 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <img
              src={require("../../assets/img/Ceylon-wedding-new.png")}
              className="w-full shadow-lg"
            />
            <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic ">
              Home - Ceylon Wedding
            </caption>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 py-20">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            01
          </h2>
          <h2
            className="text-[40px] lg:text-[70px] leading-tight"
            data-aos="fade-up"
          >
            Project planning
          </h2>
          <div className="mt-8">
            <p
              className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
              data-aos="fade-up"
            >
              Strategically planning the Ceylon Wedding project from every
              perspective is at the core of Hepta's methodology. Our focus is on
              creating an experience that guarantees satisfaction for both
              engaged couples and our clients in the wedding industry. By
              meticulously addressing the unique aspects of Ceylon Wedding, we
              aim to deliver a solution that not only meets but exceeds the
              expectations of users and clients, ensuring a memorable and
              seamless journey for all involved parties.
            </p>
          </div>
        </div>
        <div className="mt-12" data-aos="fade-up">
          <div className="grid grid-cols-3">
            <img
              src={require("../../assets/CW-PP3.gif")}
              className="w-full shadow-lg rounded"
            />
            <img
              src={require("../../assets/CW-PP2.gif")}
              className="w-full shadow-lg rounded"
            />
            <img
              src={require("../../assets/CW-PP1.gif")}
              className="w-full shadow-lg rounded"
            />
          </div>
          <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic">
            Hepta Project Planning - Ceylon Wedding
          </caption>
        </div>
      </section>

      <section className="px-4 lg:px-0 py-20 ">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            02
          </h2>
          <h2
            className="text-[40px] lg:text-[70px] leading-tight"
            data-aos="fade-up"
          >
            Visual Identity
          </h2>
          <div className="md:flex mt-8 gap-8 items-center">
            <div className="md:w-2/6 md:border-r-2 border-r-[#000]">
              <p
                className="text-[24px] md:text-[24px] text-[#000] mb-4"
                data-aos="fade-up"
              >
                Ceylon Wedding already had a killer brand, but guess what?
              </p>
            </div>
            <div className="md:w-4/6">
              <p
                className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
                data-aos="fade-up"
              >
                We, the awesome folks at Hepta, gave it a little glow-up. We
                kept the good vibes and made some tweaks to make things even
                smoother and cooler. Think of us as the cool cousins who know
                how to throw a party without losing that chill vibe. Ceylon
                Wedding is still the same, but now it's like version 2.0 –
                upgraded and ready to rock your wedding world.
              </p>
            </div>
          </div>

          <div className="md:flex mt-16 gap-8">
            <div className="md:w-2/6">
              <h4 className="font-light text-[18px]" data-aos="fade-up">
                TYPOGRAPHY
              </h4>

              <div className="md:mt-4 font-bold" data-aos="fade-up">
                <p className="text-[40px]">Inter</p>
                <p className="text-[40px]">Aa123</p>
              </div>

              <div className="mt-2 md:mt-4 font-light" data-aos="fade-up">
                <p className="text-[40px]">Inter</p>
                <p className="text-[40px]">Aa123</p>
              </div>
            </div>
            <div className=" mt-8 md:mt-0 md:w-4/6">
              <h4 className="font-light text-[18px]" data-aos="fade-up">
                COLORS
              </h4>
              <div
                className="w-full px-4 py-4 bg-[#BA9713] text-[#fff] md:mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #BA9713
              </div>
              <div
                className="w-full px-4 py-4 bg-[#EAEEF6] mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #EAEEF6
              </div>
              <div
                className="w-full px-4 py-4 bg-[#E3FBE3] mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #E3FBE3
              </div>
            </div>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <div
              className="media-element w-full mx-auto relative"
              data-aos="fade-up"
              onClick={handleMediaElementClick}
              onDrag={handleMediaElementClick}
            >
              {isSwipeContainerVisible && (
                <div
                  id="swipe-lottie-container"
                  className="absolute top-[65%] sm:top-[55%] lg:top-[52%] left-[18%] w-[150px] lg:w-[250px] z-50 opacity-90"
                ></div>
              )}
              <ReactBeforeSliderComponent
                secondImage={{
                  imageUrl: cwOldImg.imageUrl,
                  alt: cwOldImg.alt,
                  title: cwOldImg.title,
                  loading: cwOldImg.loading,
                }}
                firstImage={{
                  imageUrl: cwNewImg.imageUrl,
                  alt: cwNewImg.alt,
                  title: cwNewImg.title,
                  loading: cwNewImg.loading,
                }}
                currentPercentPosition={25}
                withResizeFeel={true}
              />
            </div>
            <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic">
              Ceylon Wedding Before and After Hepta Redesign
            </caption>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 py-40 bg-[#131313] text-[#fff]">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            03
          </h2>
          <h2
            className="text-[40px] lg:text-[70px] leading-tight"
            data-aos="fade-up"
          >
            An organized B2B system
          </h2>
          <div className="mt-8">
            <p
              className="text-[16px] md:text-[18px] font-light text-[#d4d4d4]  mb-4"
              data-aos="fade-up"
            >
              Strategically planning the Ceylon Wedding project from every
              perspective is at the core of Hepta's methodology. Our focus is on
              creating an experience that guarantees satisfaction for both
              engaged couples and our clients in the wedding industry. By
              meticulously addressing the unique aspects of Ceylon Wedding, we
              aim to deliver a solution that not only meets but exceeds the
              expectations of users and clients, ensuring a memorable and
              seamless journey for all involved parties.
            </p>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <Slider {...settings}>
              <div>
                <img
                  src={require("../../assets/img/vendor-ceylonwedding.png")}
                  className="shadow-lg rounded w-full"
                />
                <p className="text-[12px] md:text-[16px] caption-bottom mt-4 text-[#C7C7C7] font-light italic text-center">
                  Vendor - Ceylon Wedding
                </p>
              </div>
              <div>
                <img
                  src={require("../../assets/img/user-ceylonwedding.png")}
                  className="shadow-lg rounded w-full"
                />
                <p className="text-[12px] md:text-[16px] caption-bottom mt-4 text-[#C7C7C7] font-light italic text-center">
                  User - Ceylon Wedding
                </p>
              </div>
              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 py-20">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            04
          </h2>
          <h2
            className="text-[40px] lg:text-[70px] leading-tight"
            data-aos="fade-up"
          >
            Progressive web app designing
          </h2>
          <div className="mt-8">
            <p
              className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
              data-aos="fade-up"
            >
              By making the web app mobile-responsive, we've given users a fun
              and easy-to-use experience, just like a mobile app. The design
              adapts seamlessly to different screens, making it both accessible
              and enjoyable. It's all about making user interaction simple,
              intuitive, and a bit of fun!
            </p>
          </div>
          <div className="mt-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-1.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  User login - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-2.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Home - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-3.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Categories - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-4.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Store - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-5.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Add post - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-6.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Help - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-7.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Vendor profile - Ceylon Wedding
                </caption>
              </div>
              <div data-aos="fade-up">
                <img
                  loading="lazy"
                  src={require("../../assets/img/mobile-8.png")}
                />
                <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto font-light italic">
                  Logout - Ceylon Wedding
                </caption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-4 lg:px-0 my-20">
        <div className="container mx-auto">
          <div className="flex gap-2 md:gap-8 items-center" data-aos="fade-up">
            <img src={require("../../assets/img/vinod.png")} />

            <div>
              <h3 className="text-[20px] md:text-[30px] font-bold">
                Vinod Chamal Rathnayake
              </h3>
              <p className="font-light text-[#6e6e6e]">
                Founder of Ceylon Wedding
              </p>
            </div>
          </div>
          <p
            className="text-[20px] md:text-[32px] mt-12 font-light italic"
            data-aos="fade-up"
          >
            “ Lorem ipsum dolor sit amet consectetur. Mauris integer sit cras
            ipsum ipsum diam. Nibh ullamcorper adipiscing quis vulputate
            convallis cursus. At massa porta vulputate non in id pharetra in
            tempus. Ullamcorper nisl lectus accumsan elementum pellentesque
            mauris. “
          </p>
        </div>
      </section> */}

      <section className="px-4 lg:px-0 my-40">
        <div className="container mx-auto">
          <h1
            className="text-[50px] md:text-[70px] lg:text-[128px] w-5/6 mb-12"
            data-aos="fade-up"
          >
            Want to build you dream project today! Get in touch{" "}
          </h1>

          <a
            href="mailto:hello@hepta.lk"
            className="px-8 py-4 border-2 border-[#000] rounded-[100px] text-[20px] md:text-[30px]"
            data-aos="fade-up"
          >
            hello@hepta.lk
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CeylonWedding;
