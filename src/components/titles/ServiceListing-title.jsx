import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { RatingBar, RatingReview } from "../cards/servicelisting/RatingStar";

let ServiceListingTitle = () => {
  return (
    <>
      <div className="grid   grid-cols-1 lg:grid-cols-2  ">
        <div className="grid grid-cols-1">
          <h3 className="font-bold mb-3 text-[24px] lg:text[34px]">
            Bordeaux Getaway
          </h3>
          <div className="grid grid-cols-3 place-content-center gap-3">
            <RatingReview />
            <div className="flex row items-center gap-1 text-[16px]">
              <HiOutlineMapPin />
              <span>Superhost</span>
            </div>
            <span>Bordeaux, France</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-center ">
          <div className="flex items-center justify-center gap-1 ">
            <HiOutlineArrowUpOnSquare />
            <span>Share</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <HiOutlineHeart />
            <span>Save</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceListingTitle;
