import { Carousel } from "flowbite-react";

export function CarouselImg() {
  return (
    <div className="grid grid-cols-1 lg:hidden mt-5">
      <Carousel className="h-[470px]">
        <img
          src="https://i.pinimg.com/564x/72/c9/21/72c921591058bba1215c367dc0d91708.jpg"
          alt="..."
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
          alt="..."
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.savills.co.uk/_images/adobestock-539646437.jpg"
          alt="..."
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.ahstatic.com/photos/c0q3_ho_00_p_1024x768.jpg"
          alt="..."
          className="w-full h-full object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg"
          alt="..."
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  );
}
