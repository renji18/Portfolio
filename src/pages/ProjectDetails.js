import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LinkIcon from "@mui/icons-material/Link";
import { Carousel } from "react-responsive-carousel";
import loader from "../assets/loader.svg";

const ProjectDetails = () => {
  const { state } = useLocation();
  const { name, posterImage, imageUrls, desc, link } = state;
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      className="p-5"
    >
      <div
        className={`fixed inset-0 scale-150 z-10 h-screen bg-[#0a192f] flex items-center ${
          loading ? "" : "hidden"
        } justify-center flex-col`}
      >
        <img
          src={loader}
          alt="loader"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <img
          className={`sm:w-1/2 h-full sm:h-1/2 object-cover rounded-[15px]`}
          src={`https://drive.google.com/uc?export=view&id=${posterImage}`}
          alt="poster"
        />
        <div className="text-center mt-10 sm:mt-0 sm:w-1/2 text-xl">
          <p className="text-4xl mb-10 sm:mb-5 underline underline-offset-[6px]">
            {name}
          </p>
          <p className="sm:mb-5 mb-7 leading-[40px] whitespace-break-spaces">
            {desc}
          </p>
          <LinkIcon />
          <Link
            target="_blank"
            to={link}
            className="cursor-pointer text-[#64ffda]  sm:text-xl text-sm ml-2"
          >
            {link}
          </Link>
        </div>
      </div>
      <div className="mt-10 border-t border-[#64ffda] text-center text-xl">
        <p className="mb-5 mt-5">Gallery</p>
        <div className="sm:scale-75">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            transitionTime={2}
            autoPlay={true}
          >
            {imageUrls.map((url) => (
              <img
                key={url}
                className={`w-full h-full object-cover rounded-[15px]`}
                src={`https://drive.google.com/uc?export=view&id=${url}`}
                alt="poster"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
