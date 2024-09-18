import CardService from "../components/cards/servicepage/Card-service";
import HerobannerServiePage from "../components/seaction/servicepage/HeroBanner";
import IframeServicePage from "../components/seaction/iframe/IframeService-page";
import Footer from "../components/footer/Footer";
import CardShowService from "../components/cards/homepage/Services-Cards";
import {
  SearchBar,
  SearchLocation,
  TagComponent,
} from "../components/seaction/searchpage/SearchBar";
import OurClient from "../components/seaction/ourclient-Section/Ourclient";
let Servicepage = () => {
  const imageList = [
    "https://www.welcome-hotels.com/site/assets/files/84580/welcome_hotel_darmstadt_musterziimmer_1.2560x1600.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg",
    "https://www.lakmesalon.in/images/Salon_Image_690x595px-01.jpg",
    "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2023/06/korean-bbq-pexels-becerra-govea-photo.jpg",
    "https://www.welcome-hotels.com/site/assets/files/84580/welcome_hotel_darmstadt_musterziimmer_1.2560x1600.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg",
    "https://www.lakmesalon.in/images/Salon_Image_690x595px-01.jpg",
    "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2023/06/korean-bbq-pexels-becerra-govea-photo.jpg",
  ];
  const tagList = ["Salon", "Korean BBQ", "Bakery", "Barbeque"];
  return (
    <>
      <HerobannerServiePage />
      <section className=" max-w-screen-xl min-w-80 mx-auto  p-5  md:p-0 ">
        {/* search */}
        <section className="grid grid-cols-1 lg:grid-cols-2 z-10  lg:px-0 ">
          <div className="px-6 lg:px-0">
            <SearchBar />
          </div>
          <div className="flex justify-start lg:justify-end items-center">
            <SearchLocation />
          </div>
        </section>
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-screen-xl min-w-80 mx-auto  ">
          {imageList.map((item) => (
            <div>
              {/* <CardService imgUrl={item} /> */}
              <CardShowService imgUrl={item} tagList={item} />
            </div>
          ))}
        </section>
        <section className="max-w-screen-xl min-w-80 mx-auto">
          <OurClient />
          <IframeServicePage />
        </section>
      </section>
    </>
  );
};
export default Servicepage;
