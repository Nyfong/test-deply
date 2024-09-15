let HeroBanner = () => {
  return (
    <div>
      {/* sub banner */}
      <section className="grid grid-cols-1 md:grid-cols-2 md:p-3 md:gap-4 place-content-center">
        {/* why choose us */}
        <div className="grid grid-cols-1 gap-4 ">
          <p className="font-bold text-2xl">Why Choose Us?</p>
          <p> Lorem ipsum dolor sit amet.</p>
          {/* details row-1 */}
          <div className="grid grid-cols-3 gap-4  items-center justify-center ">
            {/* circle */}
            <div className="flex justify-center">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-amber-500  flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2">
              <div>
                <p className="font-bold text-lg">Excellent Communication</p>
              </div>
              <div>
                <p className=" ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, delectus!
                </p>
              </div>
            </div>
          </div>
          {/* details row-2*/}
          <div className="grid grid-cols-3 gap-4  items-center justify-center ">
            {/* circle */}
            <div className="flex justify-center">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-amber-500  flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2">
              <div>
                <p className="font-bold text-lg">Excellent Communication</p>
              </div>
              <div>
                <p className=" ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, delectus!
                </p>
              </div>
            </div>
          </div>
          {/* details row-3 */}
          <div className="grid grid-cols-3 gap-4  items-center justify-center ">
            {/* circle */}
            <div className="flex justify-center">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-amber-500  flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2">
              <div>
                <p className="font-bold text-lg">Excellent Communication</p>
              </div>
              <div>
                <p className=" ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, delectus!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* grid templete */}
        <div className="grid grid-rows-4 grid-cols-4 gap-4">
          <div className="grid place-content-center col-span-2 row-span-2 bg-amber-400">
            1000+
          </div>
          <div className="grid place-content-center col-span-2 row-span-2 bg-amber-400">
            1000+
          </div>
          <div className="grid place-content-center col-span-4 row-span-2 bg-amber-400">
            1000+
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
