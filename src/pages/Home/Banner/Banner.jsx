import React from 'react';
import banner from "../../../assets/bannerImage.jpg"
const Banner = () => {
  return (
    <div className=" bg-[#fbeaea] -opacity-75 py-12">
      <div className="md:flex items-center px-4  justify-evenly ">
        <div className="space-y-6 mb-4">
          <h1 className="md:text-5xl  text-4xl font-bold">
            BEAUTY SALON
            <br />
            FOR EVERY WOMEN
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Purus commodo ipsum duis
            <br /> laoreet maecenas. Feugiat
          </p>
          <button className="btn btn-secondary ">Get an Appointment</button>
        </div>
        <div>
          <img className="rounded-md image-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;