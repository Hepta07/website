import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#131313] text-[#fff] pt-24 pl-4 lg:pl-24 mt-2">
        <div className="flex gap-4 md:gap-16 xl:gap-28 overflow-x-scroll">
          <a href="/">
            <h1 className="text-[30px] md:text-[50px] xl:text-[70px] font-bold">
              <span className="text-[12px] lg:text-[32px] mr-2">01</span>
              <br />
              Home
            </h1>
          </a>
          <a href="#/schedule-a-call">
            <h1 className="text-[30px] md:text-[50px] xl:text-[70px] font-bold">
              <span className="text-[12px] lg:text-[32px] mr-2">02</span>
              <br />
              <span className="flex gap-6">Connect</span>
            </h1>
          </a>
          <a href="#/about">
            <h1 className="text-[30px] md:text-[50px] xl:text-[70px] font-bold">
              <span className="text-[12px] lg:text-[32px] mr-2">03</span>
              <br />
              About
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/in/hepta/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-[30px] md:text-[50px] xl:text-[70px] font-bold">
              <span className="text-[12px] lg:text-[32px] mr-2">04</span>
              <br />
              Linkedin
            </h1>
          </a>
          <a
            href="https://www.instagram.com/hepta.lk?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-[30px] md:text-[50px] xl:text-[70px] font-bold mr-10">
              <span className="text-[12px] lg:text-[32px] mr-2">05</span>
              <br />
              Instagram
            </h1>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center lg:pr-20 mt-20 py-10">
          <img
            src={require("../assets/img/heptalogo3.png")}
            width={"100px"}
            alt="Hepta"
            className="invert"
          />
          <div className="flex gap-10 mr:4 lg:mr-0">
            {/* <p>Terms</p>
          <p>Privacy Policy</p> */}
            <p>© 2023 Hepta</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
