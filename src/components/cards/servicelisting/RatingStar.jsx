import { Rating, RatingStar } from "flowbite-react";

export function RatingReview() {
  return (
    <Rating>
      <RatingStar />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        4.95
      </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        href="#"
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        73 reviews
      </a>
    </Rating>
  );
}

export function RatingBar() {
  return (
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        4.95 out of 5
      </p>
    </Rating>
  );
}

export function RatingStars() {
  return (
    <>
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
    </>
  );
}
