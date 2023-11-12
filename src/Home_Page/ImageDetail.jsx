// ImageDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../Constants/constants";
const ImageDetail = () => {
  const { id } = useParams();
  const selectedImage = images.find((image) => image.id === parseInt(id));

  if (!selectedImage) {
    return <div>Image not found</div>;
  }

  return (
    <div
      id="curtain"
      className="fixed top-0 left-0 w-full h-screen bg-black z-10 animate-[curtain-drop_1s_ease_forwards] overflow-x-auto"
    >
      <nav className="bg-black-500 px-[10vh] py-4">
        <div className="container mx-auto flex justify-between">
          <a
            href="/overview"
            className="text-white font-bold font-[Montserrat] relative flex group items-center "
          >
            {" "}
            <span className="hidden group-hover:flex h-3 w-3 bg-white rounded-full mr-2"></span>
            Overview
          </a>
          <a
            href="/challenges"
            className="text-white  font-bold font-[Montserrat] relative flex group items-center "
          >
            {" "}
            <span className="hidden group-hover:flex h-3 w-3 bg-white rounded-full mr-2"></span>
            Challeges
          </a>
          <a
            href="/approach"
            className="text-white font-bold font-[Montserrat] relative flex group items-center "
          >
            {" "}
            <span className="hidden group-hover:flex h-3 w-3 bg-white rounded-full mr-2"></span>
            Approach
          </a>
          <a
            href="/next"
            className="text-white font-bold font-[Montserrat] relative flex group items-center "
          >
            {" "}
            <span className="hidden group-hover:flex h-3 w-3 bg-white rounded-full mr-2"></span>
            Next
          </a>
        </div>
        <div className="bg-white h-0.5 mt-5"></div>
      </nav>
      <div className="flex flex-col md:flex-row">
        {/* Image Div */}
        <div className="w-full md:w-1/2 px-[18px] py-[15px] min-w-[40%] pt-[40px]  pb-[0] pl-[50px] flex justify-center align-center md: pr-[5vh]">
          <img
            src={selectedImage.url}
            alt="Description of the image"
            className="w-[75vh] h-[90vh] "
          />
        </div>

        {/* Description Div */}
        <div className="w-full md:w-1/2 pt-[10vh] pr-[5vh]">
          <h2 className="text-2xl text-white  md: pl-[3vh]">
            Image Description
          </h2>
          <p className="text-white font-[Montserrat] pt-[5vh] md: pl-[3vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero et justo sollicitudin, a congue purus rhoncus.
            Vestibulum a elit nec arcu interdum fringilla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
