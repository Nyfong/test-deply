import { CardServiceListing } from "../components/cards/servicelisting/CardServiceListing";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import UnstickyNavbar from "../components/navbar/UnstickyNavbar";
import {
  SearchBar,
  SearchLocation,
  TagComponent,
} from "../components/seaction/searchpage/SearchBar";
export const ServiceListing = () => {
  return (
    <>
      <section className="flex justify-between  z-10 max-w-screen-xl min-w-80 mx-auto">
        <SearchBar />
        <SearchLocation />
      </section>
      <main className=" max-w-screen-xl min-w-80 mx-auto">
        <CardServiceListing />
      </main>
    </>
  );
};
export default ServiceListing;
