import React from "react";
import featureImg from "../assets/features_image.png";
import Button from "./Button";

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-5 p-4 w-full">
      <h1 className="text-xl font-semibold  dark:text-white ">
        Our <span className="text-[#1A8500]">Features</span>
      </h1>
      <div className="flex flex-wrap justify-center mt-4 w-full">
        {/* Feature 1 */}
        <div className="border-2 flex flex-col items-center border-[#E9E9E9] dark:border-[#464545] rounded-md p-4 m-2 w-full sm:w-[45%] lg:w-[30%]">
          <img src={featureImg} alt="Our Features" className="h-40 object-cover" />
          <div className="my-2">
            <h1 className="font-semibold  dark:text-white text-lg text-[#0F4901] m-2">AI Generated Tips</h1>
            <p className="m-2 text-center  dark:text-[#E9E9E9]">
              Our AI-powered system provides personalized farming tips based on real-time data
              from your farm. By analyzing soil health, weather patterns, and crop history, it
              delivers actionable insights to help you make smarter decisions.
            </p>
          </div>
          <Button text="View More" />
        </div>

        {/* Feature 2 */}
        <div className="border-2 flex flex-col items-center border-[#E9E9E9] dark:border-[#464545] rounded-md p-4 m-2 w-full sm:w-[45%] lg:w-[30%]">
          <img src={featureImg} alt="Our Features" className="h-40 object-cover" />
          <div className="my-2">
            <h1 className="font-semibold  dark:text-white text-lg text-[#0F4901] m-2">Weather Forecast</h1>
            <p className="m-2 text-center  dark:text-[#E9E9E9]">
              With FOSEC, you're always prepared for the elements. Our platform delivers accurate
              weather forecasts and timely alerts, helping you stay informed of any changes.
            </p>
          </div>
          <Button text="View More" />
        </div>

        {/* Feature 3 */}
        <div className="border-2 flex flex-col items-center border-[#E9E9E9] dark:border-[#464545] rounded-md p-4 m-2 w-full sm:w-[45%] lg:w-[30%]">
          <img src={featureImg} alt="Our Features" className="h-40 object-cover" />
          <div className="my-2">
            <h1 className="font-semibold  dark:text-white text-lg text-[#0F4901] m-2">Real-time Chats</h1>
            <p className="m-2 text-center  dark:text-[#E9E9E9]">
              FOSEC connects you with a network of experts and farmers, providing instant access
              to advice and solutions via our real-time chat feature.
            </p>
          </div>
          <Button text="View More" />
        </div>
      </div>
    </div>
  );
};

export default Features;
