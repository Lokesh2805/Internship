import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import { images } from "../Constants/constants";
function Project() {
  const location = useLocation();
  const bodyBackgroundColor =
    location.pathname === "/project" ? "bg-white" : "bg-1C1C1C";
  document.body.className = `bg ${bodyBackgroundColor}`;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/project");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div
      id="curtain"
      className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto"
    >
      <div>
        <Header />
      </div>

      <div className="flex items-center justify-center gap-20 whitespace-nowrap ml-[35rem]">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Link to={`/project/${index + 1}`}>
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="relative  inline-block mx-4  h-[25.48rem] w-[19.76rem] opacity-100 object-cover mt-[7rem] animate-[movebounce_5s_linear_infinite] rounded-lg filter grayscale hover:filter-none transition-transform duration-300 sm:flex-col"
              />
            </Link>
            <figcaption className="text-white text-center mt-4 animate-[movebounce_5s_linear_infinite]">
              {index + 1}
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
