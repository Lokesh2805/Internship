import React from "react";
import Carousel from "nuka-carousel";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../Constants/constants";


const NextArrow = ({ onClick }) => (
  <div className=" pr-10" onClick={onClick}>
    {/* Add your SVG for the Next button */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg2"
      width="86"
      height="69"
      viewBox="0 0 86 69"
      fill="none"
      className="absolute bottom-0 right-[5rem] "
    >
      <path
        d="M37.1709 9.62792V41.4C37.1709 47.6047 35.9319 52.7395 33.4538 56.8047C28.723 64.9349 20.3877 69 8.44794 69H5.40668L1.6896 68.3581V57.1256L2.36543 57.1256C9.79961 57.1256 13.5167 53.4884 13.5167 46.2139V37.5488L9.12377 37.5488C3.04126 37.5488 0 34.5535 0 28.5628L0 9.62792C0 3.2093 3.04126 0 9.12377 0L28.0472 0C34.1297 0 37.1709 3.2093 37.1709 9.62792ZM55.9253 69C54.5737 69 52.8841 68.786 50.8566 68.3581V57.1256H51.5324C58.7413 57.1256 62.3458 53.4884 62.3458 46.2139V37.5488H58.2908C51.983 37.5488 48.8291 34.5535 48.8291 28.5628V9.62792C48.8291 3.2093 51.983 0 58.2908 0H77.2141C83.0714 0 86 3.2093 86 9.62792L86 41.4C86 59.8 75.9751 69 55.9253 69Z"
        fill="white"
        fill-opacity="0.12"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="47"
      viewBox="0 0 28 47"
      fill="none"
    >
      <path
        d="M0.258911 45.1152L25.5 26.499L0.258911 2.11523"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className=" pl-10" onClick={onClick}>
    {/* Add your SVG for the Prev button */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width="85"
      height="69"
      viewBox="0 0 85 69"
      fill="none"
      className="absolute top-0 left-[5rem] "
    >
      <path
        d="M48.2613 59.3721V27.6C48.2613 21.3953 49.4859 16.2605 51.9352 12.1953C56.611 4.06511 64.8494 0 76.6503 0H79.6562L83.33 0.641871V11.8744H82.6621C75.3143 11.8744 71.6405 15.5116 71.6405 22.7861V31.4512H75.9823C81.9941 31.4512 85 34.4465 85 40.4372V59.3721C85 65.7907 81.9941 69 75.9823 69H57.279C51.2672 69 48.2613 65.7907 48.2613 59.3721ZM29.7249 0C31.0609 0 32.7308 0.213957 34.7348 0.641871V11.8744H34.0668C26.9417 11.8744 23.3792 15.5116 23.3792 22.7861V31.4512H27.387C33.6215 31.4512 36.7387 34.4465 36.7387 40.4372V59.3721C36.7387 65.7907 33.6215 69 27.387 69H8.68369C2.89456 69 0 65.7907 0 59.3721V27.6C0 9.2 9.90832 0 29.7249 0Z"
        fill="white"
        fill-opacity="0.12"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="43"
      viewBox="0 0 22 43"
      fill="none"
    >
      <path
        d="M21 1.5L1.44971 19.2363L21 41.5"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </div>
);

function Section4() {
  return (
    <div>
      <section
        id="clients"
        className="flex items-center justify-center h-[30.438rem] w-[74.438rem] flex-shrink-0 rounded-[28px] bg-[#3E3E3E] cursor-pointer transition duration-300 ease-in-out"
      >
        <div className="absolute w-[60%] h-[60%] rounded-full bottom-40" />

        <Carousel
          defaultControlsConfig={{
            pagingDotsStyle: {
              width: "2rem",
            },
          }}
          autoplay
          autoplayInterval={5000}
          wrapAround
          renderCenterLeftControls={({ previousSlide }) => (
            <PrevArrow onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <NextArrow onClick={nextSlide} />
          )}
        >
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Section4;
