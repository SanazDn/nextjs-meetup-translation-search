import MainNavigation from './MainNavigation';
import React, { useState, useEffect } from 'react';
//import classes from './Layout.module.css';
//import '../../styles/globals.css';

function Layout(props) {
  // Set the default language to 'en' (English)
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

//  // Use useEffect to log language changes
//  useEffect(() => {
//   console.log('Language in Layout has changed:', language);
// }, [language]);

  return (
    <div>
      <MainNavigation language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex justify-center items-center ">
       <div className="w-10/12 md:w-1/3  md:h-32 mt-1 mb-70 mx-auto  max-w-xl">
       {/* <div className="w-10/12 md:w-1/3  h-16 md:h-32 mt-1 mb-70 mx-auto  max-w-xl"> */}
        {props.children}
       </div>
       </main>

    </div>
  );
}

export default Layout;
