
import { Carousel } from "flowbite-react";

export function CarouselImg() {
  return (
    <div className="h-[412px] w-auto lg:hidden mt-5">
      <Carousel>
        <img src="https://i.pinimg.com/564x/72/c9/21/72c921591058bba1215c367dc0d91708.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/1f/86/9f/1f869f2fdf12fa61dd33245746029e54.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
