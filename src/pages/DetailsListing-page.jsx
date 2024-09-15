let DetailListingPage = () => {
  return (
    <>
      {/* template grid  */}
      <section className="grid grid-cols-1 gap-2">
        {/* title descriptipn */}
        <div className="grid grid-cols-2  px-[30px] md:px-[100px] gap-5 md:gap-4 bg-yellow-200 ">
          <div className="grid grid-cols-1 ">
            <p>title</p>
            <p>title</p>
          </div>
          <div className="flex justify-end">save</div>
        </div>
      </section>
    </>
  );
};
export default DetailListingPage;
