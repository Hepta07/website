import React from "react";
import Footer from "../components/Footer";

const Page_404 = () => {
  return (
    <>
      <a href="/">
        <img
          src={require("../assets/img/heptalogo3.png")}
          alt="Hepta"
          title="Hepta"
          className="d-block mx-auto w-[80px] mt-5 xl:w-[150px] "
        />
      </a>
      <div className="container mx-auto text-center mb-32">
        <h1 className="text-[180px] md:text-[350px] font-semibold">404</h1>
        <h2 className="text-[24px] md:text-[80px] font-thin mb-3">
          Dude ! Where's my page ?
        </h2>
        <p className="text-[14px] md:text-[20px] font-thin">
          This is the darkside 😈
        </p>
        <a href="/">
          <div className="mx-auto mt-16 py-2 px-4 border border-[#454545] hover:bg-[#000] hover:text-[#fff] rounded-[10px] w-fit text-[24px]">
            Get me back home
          </div>
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Page_404;
