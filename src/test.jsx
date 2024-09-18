import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image:
      "https://www.welcome-hotels.com/site/assets/files/84580/welcome_hotel_darmstadt_musterziimmer_1.2560x1600.jpg",
    title: "Iphone 5G Phone",
  },
  {
    image:
      "https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg",
    title: "Samsung 5G Phone",
  },
  {
    image: "https://www.lakmesalon.in/images/Salon_Image_690x595px-01.jpg",
    title: "Intel 5G Phone",
  },
  {
    image: "https://www.lakmesalon.in/images/Salon_Image_690x595px-01.jpg",
    title: "Poco 5G Phone",
  },
  {
    image:
      "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2023/06/korean-bbq-pexels-becerra-govea-photo.jpg",
    title: "Techno 5G Phone",
  },
];
// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 cursor-pointer z-10"
      style={{ color: "red", fontSize: "2rem" }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 cursor-pointer z-10"
      style={{ color: "red", fontSize: "2rem" }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
}

function Test() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />, // Pass custom next arrow
    prevArrow: <PrevArrow />, // Pass custom prev arrow
  };

  return (
    <>
      <div className=" pt-10">
        <div className="w-full m-auto ">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="bg-white p-2">
                  <div>
                    <img
                      src={item.image}
                      className="w-full h-60 object-cover  block  "
                    />
                  </div>

                  <div className="p-6 bg-blue-600">
                    <p className="font-semibold text-white text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Test;
