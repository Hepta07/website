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
  alt: "Old Yarn Clothing",
  title: "Old Yarn Clothing",
  loading: "lazy",
};

const cwNewImg = {
  imageUrl: require("../../assets/img/Ceylon-wedding-new.png"),
  alt: "Redesigned Yarn Clothing",
  title: "Redesigned Yarn Clothing",
  loading: "lazy",
};

const YarnClothing = () => {
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
        href="https://yarnclothing.co/"
        target="_blank"
        className="fixed right-[20px] lg:right-[70px] bottom-[30px] text-[12px] md:text-[16px] font-bold py-4 px-6 rounded-[100px] bg-[#0A0A0A] text-[#fff] z-50 shadow-md"
      >
        Visit Yarn Clothing
        <span className="ml-2 pt-4 align-top text-[12px]">&#x2197;</span>{" "}
      </a>
      <section className="px-4 lg:px-0 border-l-8 border-l-[#0A0A0A] lg:h-screen md:overflow-hidden">
        <div className="container mx-auto py-28 md:py-0">
          <div class="md:grid grid-cols-2 gap-2">
            <div className="h-100 my-auto" data-aos="fade-up">
              <h1 className="leading-none text-[80px] lg:text-[150px] text-[#0A0A0A] stroke-2 font-semibold">
                Yarn Clothing
              </h1>
              <p className="text-[14px] md:text-[20px] my-4 md:my-8">
                Crafting Connectivity: Fashion with Purpose, Sustainability, and
                Global Inspiration.
              </p>
              <a
                href="#case-study"
                className="text-[#0A0A0A] text-[14px]md:text-[24px] font-semibold"
              >
                {" "}
                Case Study{" "}
                <span className="text-[18px] align-middle ml-1">&#x2193;</span>
              </a>
            </div>

            <div className="mt-20 md:-mt-56">
              <img
                src={require("../../assets/img/Yarn-new.png")}
                className="mb-8 opacity-20 hidden md:block"
              />
              <img
                src={require("../../assets/img/Yarn-new.png")}
                className="mb-8 shadow-xl"
              />
              <img
                src={require("../../assets/img/Yarn-new.png")}
                className="opacity-20 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0 mt-20 py-20" id="case-study">
        <div className="container mx-auto">
          <h2 className="text-[14px] md:text-[20px]" data-aos="fade-up">
            About Yarn Clothing
          </h2>
          <h2
            className="text-[30px] md:text-[40px] lg:text-[60px] leading-tight w-5/6"
            data-aos="fade-up"
          >
            Yarn Clothing: weaving style into every pixel, Your destination for trendsetting fashion!
          </h2>
          <div className="md:flex mt-8 gap-8">
            <div className="md:w-5/6">
              <p
                className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
                data-aos="fade-up"
              >
                Introducing Yarn Clothing – your go-to spot for the latest
                styles straight out of Sri Lanka! But let's face it, their old
                website was feeling a bit, well, last season. That's where Hepta
                stepped in! Think of Hepta as the fashion-forward friend who
                gives your wardrobe a makeover. They worked their magic to
                create a fresh, new website for Yarn Clothing that's as easy on
                the eyes as their latest collection. Now, whether you're
                scrolling from Colombo or cruising from California, Yarn's got
                you covered with their snazzy new site. Get ready to level up
                your style game with Yarn and Hepta on your side!
              </p>

              <a
                href="https://yarnclothing.co/who-we-are/our-purpose"
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
                <p className="font-light">Yarn Clothing</p>
              </div>
              <div className="mt-4" data-aos="fade-up">
                <h4 className="font-bold">DATE</h4>
                <p className="font-light">Jan 2024 - Feb 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <img
              src={require("../../assets/img/Yarn-new.png")}
              className="w-full shadow-lg"
            />
            <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic ">
              Home - Yarn Clothing
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
            Iterations
          </h2>
          <div className="mt-8">
            <p
              className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
              data-aos="fade-up"
            >
              Hepta went above and beyond, experimenting with different UI
              designs to ensure a smooth and friendly interaction for Yarn
              Clothing's customers. Like a tailor fine-tuning a bespoke suit,
              they crafted each iteration with precision and care, aiming for
              that perfect fit. From sleek navigation menus to intuitive
              checkout processes, every detail was meticulously crafted to
              enhance the user experience. It's all about making shopping with
              Yarn Clothing a breeze – because who has time for clunky websites
              in today's fast-paced world?
            </p>
          </div>
        </div>
        <div className="mt-12" data-aos="fade-up">
          <div className="grid grid-cols-3">
            <img
              src={require("../../assets/yarn-clothing/YC-PP1.gif")}
              className="w-full shadow-lg rounded"
            />
            <img
              src={require("../../assets/yarn-clothing/YC-PP2.gif")}
              className="w-full shadow-lg rounded"
            />
            <img
              src={require("../../assets/yarn-clothing/YC-PP3.gif")}
              className="w-full shadow-lg rounded"
            />
          </div>
          <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic">
            Hepta and Yarn Project Iterations - Yarn Clothing
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
            <p
              className="text-[16px] md:text-[18px] font-light text-[#6e6e6e] mb-4"
              data-aos="fade-up"
            >
              Hepta didn't just revamp Yarn Clothing's website – they became the
              custodians of its brand essence, ensuring that every pixel stayed
              true to Yarn's unique identity. Like expert weavers, they wove
              together Yarn's branding elements seamlessly into the UI design,
              striking the perfect balance between visual appeal and user
              experience.
            </p>
          </div>

          <div className="md:flex mt-16 gap-8">
            <div className="md:w-2/6">
              <h4 className="font-light text-[18px]" data-aos="fade-up">
                TYPOGRAPHY
              </h4>

              <div className="md:mt-4 font-bold" data-aos="fade-up">
                <p className="text-[40px]">Lato</p>
                <p className="text-[40px]">Aa123</p>
              </div>

              <div className="mt-2 md:mt-4 font-light" data-aos="fade-up">
                <p className="text-[40px]">Lato</p>
                <p className="text-[40px]">Aa123</p>
              </div>
            </div>
            <div className=" mt-8 md:mt-0 md:w-4/6">
              <h4 className="font-light text-[18px]" data-aos="fade-up">
                COLORS
              </h4>
              <div
                className="w-full px-4 py-4 bg-[#2e2e2e] text-[#fff] md:mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #2E2E2E
              </div>
              <div
                className="w-full px-4 py-4 bg-[#FEFEFE] border-2 border-[#cccccc] mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #FEFEFE
              </div>
              <div
                className="w-full px-4 py-4 bg-[#BB9165] text-[#fff] mt-4 rounded-[5px]"
                data-aos="fade-up"
              >
                #BB9165
              </div>
            </div>
          </div>

          <div className="mt-20" data-aos="fade-up">
            <img
              src={require("../../assets/yarn-clothing/network-yarn.png")}
              className="w-full shadow-lg"
            />
            <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic ">
              Network - Yarn Clothing
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
            SEO focused friendly
          </h2>
          <div className="mt-8">
            <p
              className="text-[16px] md:text-[18px] font-light text-[#d4d4d4]  mb-4"
              data-aos="fade-up"
            >
              Hepta didn't stop at just creating a stunning website for Yarn
              Clothing – they also made sure it gets the spotlight it deserves
              on search engines. Employing industry-leading SEO principles,
              Hepta worked their magic behind the scenes to boost Yarn
              Clothing's visibility online. From optimizing meta tags and
              keyword placement to enhancing site speed and mobile
              responsiveness, Hepta left no stone unturned in the quest to climb
              the ranks of search engine results. It's like giving Yarn
              Clothing's website a VIP pass to the top of Google's guest list!
              Now, when fashionistas search for the latest trends from Sri Lanka
              or global brands, Yarn Clothing shines bright like a diamond,
              thanks to Hepta's SEO wizardry. It's not just a website – it's a
              digital runway, strutting its stuff for the world to see.
            </p>
          </div>
          <div className="mt-20" data-aos="fade-up">
            <img
              src={require("../../assets/yarn-clothing/seo-yarn.png")}
              className="w-full shadow-lg"
            />
            <caption class="text-[12px] md:text-[16px] caption-bottom w-max block mx-auto mt-4 font-light italic ">
              Solutions - Yarn Clothing
            </caption>
          </div>
        </div>
      </section>

      {/* <section className="px-4 lg:px-0 my-20">
        <div className="container mx-auto">
          <div className="flex gap-2 md:gap-8 items-center" data-aos="fade-up">
            <img src={require("../../assets/img/vinod.png")} />

            <div>
              <h3 className="text-[20px] md:text-[30px] font-bold">
                Baasith
              </h3>
              <p className="font-light text-[#6e6e6e]">
                Founder of Yarn Clothing
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

export default YarnClothing;
