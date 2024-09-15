import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { RatingBar, RatingReview } from "../cards/servicelisting/RatingStar";

let ServiceListingTitle = () => {
  return (
    <>
      <h3 className="font-bold mb-3 text-[24px] lg:text[34px]">
        Bordeaux Getaway
      </h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <RatingReview />
          <div className="flex row items-center gap-1 text-[16px]">
            <HiOutlineMapPin />
            <span>Superhost</span>
          </div>
          <span>Bordeaux, France</span>
        </div>
        <div className="flex gap-4 mx-14">
          <div className="flex items-center gap-1">
            <HiOutlineArrowUpOnSquare />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineHeart />
            <span>Save</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceListingTitle;
