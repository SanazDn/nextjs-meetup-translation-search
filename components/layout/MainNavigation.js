import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";

import { useTranslation } from "next-i18next";
import i18n from "../../i18n";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();

  const { i18n, t } = useTranslation();

  const [language, setLanguage] = useState('en');

  const changeLanguageHandler = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    
    setLanguage(newLanguage);
  };

  console.log("language", language);

  return (
    <header className="w-full h-20 flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500  md:px-10">
      {/* -- Website Logo -- */}
      <div
        className="hidden sm:flex md:text-2xl font-bold text-white text-base md:text-2xl sm:text-sm px-10"
        data-test="your-data-value"
      >
        {t("React Meetups")}
      </div>

      {/* -- Primary Navbar items -- */}
      <nav>
        {/* hidden sm:flex ------> does not show on moblie screen
            For having responsive text size ----------> text-base md:text-2xl sm:text-sm
        */}

        <ul className="hidden sm:flex list-none  items-baseline  ">
          <li className="ml-12">
            <Link
              href="/"
              className="no-underline text-lg text-pink-300 hover:text-pink-500 hover:text-white active:text-white text-base md:text-base sm:text-sm "
            >
              {t("All Meetups")}
            </Link>
          </li>
          <li className="ml-12" data-test="newmeetup">
            <Link
              //href="/new-meetup"
              href={`/new-meetup?data=${language}`}
              className="no-underline text-lg text-pink-300 hover:text-pink-500 hover:text-white active:text-white text-base md:text-base sm:text-sm "
            >
              {t("Add New Meetup")}
            </Link>
          </li>
          <li className="ml-12" data-test="selectLanguage">
            <select
              className="px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-xs ml-0"
              onChange={changeLanguageHandler}
              value={language} // Use the language state as the value
              data-test="selectLanguage"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </li>
        </ul>

        {/* ---------------------------------------------moblie mood ---------------------------------------------- */}
        {/* md:hidden ------> shows only on moblie screen */}
        {/* <div className="relative"> */}
        <div className="md:hidden flex ml-auto flex-col absolute top-0 right-0">
          <Head>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
          </Head>
          <div
            className="m-1 font-bold text-xs text-white "
            data-test="your-data-value"
          >
            React
            <br />
            {t("Meetups")}
          </div>
          <div className=" w-8 h-2 m-1   bg-white  right-0">
            <Link href="/" className=" text-transparent ">
              aaaa
            </Link>
          </div>
          <div className=" w-8 h-2 m-1  bg-white right-0">
            <Link href="/new-meetup" className="text-transparent">
              aaaa
            </Link>
          </div>
        </div>
        <div className=" md:hidden absolute  ml-1 top-0 left-0">
            <select
              onChange={changeLanguageHandler}
              value={language} // Use the language state as the value
              data-test="selectLanguage"
              className="  px-0 py-0 border border-gray-300 rounded-md  focus:ring focus:border-blue-300 text-xxs top-0  ">
              <option value="en">En</option>
              <option value="fr">Fr</option>
            </select>
          </div>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default MainNavigation;
