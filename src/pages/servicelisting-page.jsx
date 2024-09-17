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
      <main className="max-w-screen-xl min-w-80 mx-auto ">
        {/* search */}
        <section className="grid grid-cols-1 lg:grid-cols-2 z-10  lg:px-0 ">
          <div className="px-6 lg:px-0">
            <SearchBar />
          </div>
          <div className="flex justify-start lg:justify-end items-center">
            <SearchLocation />
          </div>
        </section>
        <section className=" ">
          <CardServiceListing />
        </section>
      </main>
    </>
  );
};
export default ServiceListing;
