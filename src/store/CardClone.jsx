import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../components/animations/food1.json";
import animationData3 from "../components/animations/rocket.json";
import animationData2 from "../components/animations/online-sales.json";
import LogoGP from "../assets/img/LogoCP1.png";
import Good from "../assets/img/good.png";
export let ProductCardClone = ({
  images,
  title,
  id,
  description,
  day,
  category,
}) => {
  return (
    <>
      <section className="">
        <div className="grid md:grid-cols-3   grid-cols-2 ">
          <div className=" col-span-2 grid place-content-start grid-cols-1 gap-4  ">
            {/* title */}
            <div className="py-5 ">
              <img
                src={images}
                className=" h-[200px] w-full object-cover rounded-lg border-2 border-primary-500"
                alt={title}
              />
            </div>
            {/* title */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="line-clamp-3">{description}</p>
              </div>
              <div className="flex gap-3 justify-end pr-10">
                {/* image */}
                <div>
                  <img
                    className="w-full h-[40px] object-contain"
                    src={LogoGP}
                    alt=""
                  />
                </div>
                {/* link */}
                <div>
                  <Link to={`/api/${id}`}>
                    <button className="text-white bg-primary-500 px-8 py-2 rounded-md ">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2  p-3 mt-3 ">
            <div className="hidden md:flex">
              <iframe
                class="w-full h-full row-span-2 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6314046837374!2d104.89921187567658!3d11.578259843891068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1726560343607!5m2!1sen!2skh"
                title="Example"
              ></iframe>
            </div>
            <div className=" flex items-end justify-center hidden md:flex">
              <div class="flex flex-col gap-2 dark:text-white  w-full  dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
                <div class="flex flex-row justify-between w-full">
                  <div class="flex flex-row justify-between w-full">
                    <p class="text-xs">{category}</p>
                    <p class="text-xs">{day}</p>
                  </div>
                </div>
                <div class="flex flex-row justify-between w-full">
                  <h3 class="text-xl font-bold">Great Experience!</h3>

                  <div class="text-xs">
                    <div class="flex flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="text-body line-clamp-1">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
