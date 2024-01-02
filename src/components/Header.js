import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath.replace("/", "") || "home");
  }, []);

  const isLinkActive = (link) => (activeLink === link ? "active" : "");

  return (
    <>
      <header className="sticky bottom-[10px] w-full flex justify-center z-50">
        <nav className="p-2 text-[13px] rounded-[20px] bg-[#ffffff] bg-opacity-70 backdrop-blur-lg text-[#000] lg:text-[18px] font-light flex gap-4 md:gap-8 justify-center items-center">
          <a
            href="/"
            className={`bg-[#222222] py-4 px-4 rounded-[10px] ${isLinkActive(
              "home"
            )}`}
            onClick={() => handleLinkClick("home")}
          >
            <img
              src={require("../assets/img/HeptaLogo-2.svg").default}
              alt="Hepta"
              className="d-block mx-auto w-[15px] xl:w-[25px] invert"
            />
          </a>
          <div className="gap-0 md:gap-2 flex">
            <a
              href="/"
              className={`py-2 px-4 hover:font-medium ${isLinkActive("home")}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              href="#/about"
              className={`py-2 px-4 hover:font-medium ${isLinkActive("about")}`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
            <a
              href="#/schedule-a-call"
              className={`ml-4 py-2 px-4 border border-[#454545] hover:bg-[#000] hover:text-[#fff] rounded-[10px] ${isLinkActive(
                "schedule"
              )}`}
              onClick={() => handleLinkClick("schedule")}
            >
              Schedule a call
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
