import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
//import '../../styles/globals.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
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
