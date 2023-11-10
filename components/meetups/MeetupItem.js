import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

// .actions is represented by the actions class on the containing div.
// padding: 1.5rem is equivalent to p-6 (6 units in the default spacing scale).
// text-align: center is represented by text-center to align text to the center.
// For the button styles:

// font: inherit is applied by default, so there's no need for an additional class.
// cursor: pointer is applied by cursor-pointer.
// color: #77002e is represented by text-pink-700 to set the text color to the specified pink shade.
// border: 1px solid #77002e is represented by border border-pink-700.
// background-color: transparent is achieved by using bg-transparent.
// padding: 0.5rem 1.5rem is equivalent to px-4 py-2 (4 units for horizontal padding and 2 units for vertical padding).
// border-radius: 4px is represented by rounded-md.
// For the button hover and active states:

// background-color: #ffe2ed on hover and active states is represented by hover:bg-pink-100.

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
    console.log(props.title);
  }

  return (
    <li className={classes.item}>
      <Card>
        
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        {/* <div className="w-full h-18rem overflow-hidden border-t-6 border-r-6 border-l-6 border-gray-300 rounded-t-6">
          <img
            className="w-full h-full"
            src={props.image}
            alt={props.title}
          />
        </div> */}


        <div>
          <h3 className="text-center md:mb-2 m-0 p-1">{props.title}</h3>
          <address className=" text-gray-700 text-center md:mb-4 text-base md:text-sm sm:text-xxs">
            {props.address}
          </address>
        </div>
        <div className="actions p-6 text-center flex justify-center items-center px-4 py-3 sm:px-2 sm:py-1">
          <div className=" " data-test="Show Details">
            <button
              className="mb-2 md:w-40 sm:w-0 md:h-8 sm:h-5 font-inherit cursor-pointer text-pink-700 text-base md:text-sm  sm:text-sm border border-pink-700 bg-transparent px-2 py-1 rounded-md sm:px-0 sm:py-0 hover:bg-pink-200 "
              onClick={showDetailsHandler}
            >
              Show Details
            </button>

            {/* <button className="text-base md:text-2xl sm:text-sm" onClick={showDetailsHandler}>Show Details</button> */}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
