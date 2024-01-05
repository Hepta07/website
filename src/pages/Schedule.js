import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";

const Schedule = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hepta | Schedule a call</title>
        <meta name="description" content="Got and idea. Lets connect!" />

        <link rel="canonical" href="/schedule-a-call" />
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
        <div className="my-10">
          <Marquee
            play={true}
            direction="right"
            speed={100}
            pauseOnHover={true}
          >
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Schedule a call
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Schedule a call
            </h2>
            <h2 className="text-[60px] lg:text-[100px] font-thin text-[#dddddd] italic mx-6 lg:mx-12">
              Schedule a call
            </h2>
          </Marquee>

          <p className="text-[20px] text-center font-light text-[#6e6e6e]">
            From pixels to profits unlock your business potential. Schedule a
            call today or mail us on{" "}
            <a href="mailto:hello@hepta.lk" className="font-medium rounded text-black">
              hello@hepta.lk
            </a>
          </p>

          <Cal
            calLink="hepta/introductioncall"
            style={{
              width: "100%",
              height: "100%",
              marginTop: "70px",
              marginBottom: "70px",
              overflow: "scroll",
            }}
            config={{ layout: "month_view" }}
          />
        </div>
        <Header />
      </div>

      <Footer />
    </>
  );
};

export default Schedule;
