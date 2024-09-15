import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CarouselImg } from "./CarouselImg";
import { RatingBar, RatingReview, RatingStars } from "./RatingStar";
import ServiceListingTitle from "../../titles/ServiceListing-title";
const count = 3;
const indexList = Array.from({ length: count }, (_, i) => i + 1);
export function CardServiceListing() {
  return (
    <>
      <section>
        {indexList.map((el) => (
          <div key={el}>
            <div className="grid justify-center mx-auto ">
              <ServiceListingTitle />
              <CarouselImg />
              <div className="py-10 grid lg:hidden mt-5">
                <RatingReview />
                <div className="grid items-center grid-cols-2 lg:grid-cols-4 mt-3 justify-evenly py-5">
                  <span className="py-5">Cleanliness</span>
                  <RatingBar />
                  <span className="py-5">Accuracy</span>
                  <RatingBar />
                  <span className="py-5">Communication</span>
                  <RatingBar />
                  <span className="py-5">Location</span>
                  <RatingBar />
                  <span className="py-5">Check-In</span>
                  <RatingBar />
                  <span className="py-5">Value</span>
                  <RatingBar />
                </div>
                <a
                  href="#"
                  className="border-black border-2 rounded-lg p-2 w-[100px] text-center mt-4"
                >
                  Go to
                </a>
              </div>
              <div className="flex gap-3 pt-5 relative h-[400px]">
                <div className="hidden lg:flex gap-3">
                  <img
                    className="h-[412px] w-auto rounded-lg hover:shadow-lg"
                    src="https://i.pinimg.com/564x/72/c9/21/72c921591058bba1215c367dc0d91708.jpg"
                    alt=""
                  />
                  <button className="md:bg-white md:border-black text-white md:text-black rounded-lg flex items-center justify-center absolute bot-0 bottom-0 right-5 gap-2 py-2 px-4">
                    <HiOutlineSquares2X2 className="text-[32px] md:text[14px]" />
                    <span className="hidden md:block text-[14px]">
                      Show all photos
                    </span>
                  </button>
                  <div className="lg:grid grid-cols-2 gap-3 hidden">
                    <img
                      className="w-[300px] h-[200px] rounded-lg"
                      src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                      alt=""
                    />
                    <img
                      className="w-[300px] h-[200px] rounded-lg"
                      src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                      alt=""
                    />
                    <img
                      className="w-[300px] h-[200px] rounded-lg"
                      src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                      alt=""
                    />
                    <img
                      className="w-[300px] h-[200px] rounded-lg"
                      src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="py-10 hidden lg:grid mt-5">
                <RatingReview />
                <RatingStars />
                <a
                  href="#"
                  className="border-black border-2 rounded-lg p-2 w-[100px] text-center mt-4"
                >
                  Go to
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
