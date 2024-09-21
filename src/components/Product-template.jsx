import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RatingBar } from "./cards/servicelisting/RatingStar";
import { RatingReview } from "./cards/servicelisting/RatingStar";
export let ProductCard = ({ image }) => {
  return (
    <>
      <section>
        <div className="flex relative ">
          <div className="lg:flex gap-3">
            <button className="md:bg-white md:border-black text-white md:text-black rounded-lg flex items-center justify-center absolute bot-0 bottom-0 right-5 gap-2 py-2 px-4">
              <HiOutlineSquares2X2 className="text-[32px] md:text[14px]" />
              <span className="hidden md:block text-[14px]">
                Show all photos
              </span>
            </button>
            <div className="lg:grid grid-cols-8 grid-rows-2 hidden gap-4">
              <div className=" col-span-4 row-span-2 w-full rounded-lg hover:shadow-lg overflow-hidden">
                <img
                  // src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                  src={image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              {/* col 2 column */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                  alt=""
                />
              </div>
              {/* col 2 column */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                  alt=""
                />
              </div>
              {/* col 2 column */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                  alt=""
                />
              </div>
              {/* col 2 column */}
              <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
