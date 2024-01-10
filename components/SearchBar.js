// components/SearchBar.js

import React, { useState } from 'react';
import { useTranslation } from "next-i18next";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const { i18n, t } = useTranslation();

  return (
    <div>
      <style>
        {`
          @media (max-width: 1023px) {
           
            .sm-flex {
              display: none;
            }
            .md-flex{
              display: flex;
            }
          }

          @media (min-width: 1023px) {
            
            .sm-flex {
              display: flex;
            }

            .md-flex{
              display: none;
            }
            
          }
        `}
      </style>

      {/* On screens larger than 1023 pixels */}
      <div className=' sm-flex items-center absolute m-3 right-0'>
        <form onSubmit={handleSubmit} className="border border-gray-300 rounded-md p-1">
          <input
            type="text"
            placeholder= {t("Search")}
            value={searchTerm}
            onChange={handleChange}
            className="border-none outline-none p-2 w-40"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white p-2 ml-2 rounded"
          >
            {t("Search")}
          </button>
        </form>
      </div>

      {/* On screens smaller than or equal to 1023 pixels */}
      <div className="md-flex items-center   mb-3 ">
        <form onSubmit={handleSubmit} className="flex border border-gray-300 rounded-md p-0 w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className="border-none outline-none p-2  mx-auto"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white p-2  rounded ml-2"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
