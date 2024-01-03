import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/${link}`;
    }
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const currentPath = window.location.pathname.substring(1);
      setActiveLink(currentPath || "home");
    };
    

    // Attach the event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial setup
    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isLinkActive = (link) => (activeLink === link ? "active" : "");

  return (
    <>
      <header className="sticky bottom-[10px] w-full flex justify-center z-50">
        <nav className="p-2 text-[13px] rounded-[20px] bg-[#ffffff] bg-opacity-70 backdrop-blur-lg text-[#000] lg:text-[18px] font-light flex gap-4 md:gap-8 justify-center items-center">
          <div
            className={`bg-[#222222] py-4 px-4 rounded-[10px] ${isLinkActive(
              "home"
            )}`}
            onClick={() => handleLinkClick("home")}
          >
            <img
              src={require("../assets/img/HeptaLogo-2.svg").default}
              alt="Hepta"
              title="Hepta"
              className="d-block mx-auto w-[15px] xl:w-[25px] invert"
            />
          </div>
          <div className="gap-0 md:gap-2 flex">
            <div
              className={`py-2 px-4 hover:font-medium ${isLinkActive("home")}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </div>
            <div
              className={`py-2 px-4 hover:font-medium ${isLinkActive("about")}`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </div>
            <div
              className={`ml-4 py-2 px-4 border border-[#454545] hover:bg-[#000] hover:text-[#fff] rounded-[10px] ${isLinkActive(
                "schedule-a-call"
              )}`}
              onClick={() => handleLinkClick("schedule-a-call")}
            >
              Schedule a call
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
