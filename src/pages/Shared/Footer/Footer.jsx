import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" c p-10 bg-secondary text-white">
      <div className="container  mx-auto grid sm:grid-cols-1 md:grid-cols-4">
        <div className="mb-4">
          <p className='mt-4'>
         
            H#000 (0th Floor), Road #00, New DOHS,<br/> Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold ">Company</h2>
          <li className="list-none">
            <Link to="/">About</Link>
          </li>

          <li className="list-none">
            <Link to="/">Project</Link>
          </li>
          <li className="list-none">
            <Link to="/">Our Team</Link>
          </li>
          <li className="list-none">
            <Link to="/">Terms Conditions</Link>
          </li>
          <li className="list-none">
            <Link to="/">Submit Listing</Link>
          </li>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Quick Link</h2>

          <li className="list-none">
            <Link to="/">About</Link>
          </li>

          <li className="list-none">
            <Link to="/">Project</Link>
          </li>
          <li className="list-none">
            <Link to="/">Our Team</Link>
          </li>
          <li className="list-none">
            <Link to="/">Terms Conditions</Link>
          </li>
          <li className="list-none">
            <Link to="/">Submit Listing</Link>
          </li>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p>adipiscing elit. Purus commodo ipsum</p>
          <Link to="/">Project</Link>
          <Link to="/">Our Team</Link>
          <Link to="/">Terms Conditions</Link>
          <Link to="/">Submit Listing</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;