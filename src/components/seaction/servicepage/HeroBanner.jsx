import Button1 from "../../button/propBtn/Button1";
let HerobannerServiePage = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-amber-500 sm:block">
                {" "}
                Increase Conversion.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam e!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button1 title="Get start" />

              <Button1 title="Learn more" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HerobannerServiePage;
