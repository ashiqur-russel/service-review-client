import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="p-4 bg-stone-50 md:p-8 lg:p-10 dark:bg-gray-800 mt-4">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Mein
          </span>{" "}
          Studio
        </h1>
      </div>
      <p className="my-6 text-gray-500 dark:text-gray-400 text-center">
        Mein Studio is a place to see things differently. Since 1988, we have
        championed photography that explores issues of race, identity,
        representation, human rights and social justice, sharing how photographs
        reflect lived experiences and shape our understanding of ourselves and
        others.
      </p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Premium
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6 ">
            Campaigns
          </Link>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Blog
          </a>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Affiliate Program
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 lg:text-center">
        Mein Studio © 2022 <Link href="#" className="hover:underline"></Link>.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
