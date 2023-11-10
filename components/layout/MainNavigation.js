import Link from 'next/link';
import Head from 'next/head';

function MainNavigation() {

  return (
    <header className="w-full h-20 flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500  md:px-10" >

      {/* -- Website Logo -- */}
      <div className="hidden sm:flex md:text-2xl font-bold text-white text-base md:text-2xl sm:text-sm px-10" data-test="your-data-value">React Meetups</div>

      {/* -- Primary Navbar items -- */}
      <nav>
        {/* hidden sm:flex ------> does not show on moblie screen
            For having responsive text size ----------> text-base md:text-2xl sm:text-sm
        */}
        <ul className="hidden sm:flex list-none m-0 p-0 items-baseline ">
          <li className='ml-12'>
            <Link href='/'  className="no-underline text-lg text-pink-300 hover:text-pink-500 hover:text-white active:text-white text-base md:text-base sm:text-sm">All Meetups</Link>
          </li>
          <li className='ml-12'>
            <Link href='/new-meetup' className="no-underline text-lg text-pink-300 hover:text-pink-500 hover:text-white active:text-white text-base md:text-base sm:text-sm">Add New Meetup</Link>
          </li>
        </ul>

      {/* ---------------------------------------------moblie mood ---------------------------------------------- */}
        {/* md:hidden ------> shows only on moblie screen */}
        {/* <div className="relative"> */}
        <div className="md:hidden flex ml-auto flex-col absolute top-0 right-0">
         <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
         </Head>
         <div className='m-1 font-bold text-xs text-white ' data-test="your-data-value">React<br />Meetups</div>
        <div className=' w-8 h-2 m-1   bg-white  right-0'>
        <Link href='/'className=' text-transparent '>aaaa</Link>
          </div>
          <div className=' w-8 h-2 m-1  bg-white right-0'>
          <Link href='/new-meetup' className='text-transparent'>aaaa</Link>
          </div>
        </div>
        {/* </div> */}

      </nav>
    </header>
  );
}

export default MainNavigation;
