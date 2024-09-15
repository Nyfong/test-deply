import CardService from "../components/cards/servicepage/Card-service";
import HerobannerServiePage from "../components/seaction/servicepage/HeroBanner";
import IframeServicePage from "../components/seaction/iframe/IframeService-page";
import Footer from "../components/footer/Footer";
import OurClient from "../components/seaction/ourclient-Section/Ourclient";
let Servicepage = () => {
  const imageList = [
    "https://www.welcome-hotels.com/site/assets/files/84580/welcome_hotel_darmstadt_musterziimmer_1.2560x1600.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg",
    "https://www.lakmesalon.in/images/Salon_Image_690x595px-01.jpg",
    "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2023/06/korean-bbq-pexels-becerra-govea-photo.jpg",
  ];
  return (
    <div>
      <HerobannerServiePage />
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[30px] md:px-[100px] gap-5 md:gap-4  ">
        {imageList.map((item) => (
          <div>
            <CardService imgUrl={item} />
          </div>
        ))}
      </section>
      <OurClient />
      <IframeServicePage />
    </div>
  );
};
export default Servicepage;
