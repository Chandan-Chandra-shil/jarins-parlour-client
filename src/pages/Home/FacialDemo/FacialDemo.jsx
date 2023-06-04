import React from 'react';
import facial from '../../../assets/facial.jpg'
const FacialDemo = () => {
  return (
    <div className=" bg-[#fbeaea] -opacity-75 py-12">
      <div className="container mx-auto md:flex justify-center items-center ">
        <div className='mx-4 mb-4'>
          <img className="rounded" src={facial} alt="" />
        </div>
        <div className="md:ms-20 mx-4">
          <div className="md:space-y-12 mb-4">
            <h1 className="text-4xl font-bold mb-4">
              Let us handle your, <br /> screen
              <span className="text-secondary">Professionally</span>.
            </h1>
            <p className="text-lg ms:hidden ">
              With well written codes, we build amazing apps for all <br />
              platforms, mobile and web apps in general ipsum. <br /> Lorem
              ipsus dolor sit amet, consectetur adipiscing
              <br /> elit. Purus commodo ipsum.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h2 className="text-3xl text-secondary font-extrabold mb-2">
                500+
              </h2>
              <p className="font-semibold">Happy Customer</p>
            </div>
            <div>
              <h2 className="text-3xl text-secondary font-extrabold mb-2">
                16+
              </h2>
              <p className="font-semibold">Total service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialDemo;