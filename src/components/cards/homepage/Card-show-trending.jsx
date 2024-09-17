import { SiRclone } from "react-icons/si";
import { Link } from "react-router-dom";
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "item 5",
  "Item 6",
  "Item 7",
  "Item 8",
];
const images = [
  "https://hairsalonbarrie.ca/wp-content/uploads/2022/10/mens-salon-thegem-blog-default.jpg",
  "https://media.istockphoto.com/id/639607852/photo/hairstylist-serving-client-at-barber-shop.jpg?s=612x612&w=0&k=20&c=-kBoMs26KIX1Hl6uh_VLRHCtLxnLYyq9a0n7X8iu5MQ=",
  "https://naomisheadmasters.com/wp-content/uploads/2023/10/Top-10-Salons-In-India.jpg",
  "https://images.squarespace-cdn.com/content/v1/5e5833fa525bce01a601c802/1584724640173-ACZAM31SLXWM2Q1C0HWO/2020-03-19+16.42.31.jpg",
  "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/the_popular_dishes_of_gogi_train_restaurant_are_its_barbeque_selection_and_korean_spicy_crab_with_soy_sauce._yousos_apdoulrashim.jpg",
  "https://retaildesignblog.net/wp-content/uploads/2018/05/K-Duck-Korean-restaurant-by-Design-Plus-Ho-Chi-Minh-City-Vietnam.jpg",
  "https://www.agoda.com/wp-content/uploads/2019/03/Best-restaurants-in-Seoul-Fine-dining-Jungsik-Seoul-Mingles-restaurant.jpg",
  "https://restaurantkronborg.dk/wp-content/uploads/2023/09/Restaurant-Kronborg-Billeder-58-1024x683.jpg",
  "https://digital.ihg.com/is/image/ihg/crowne-plaza-quezon-city-9279036462-2x1",
];

let CardTrending = () => {
  return (
    <div>
      <Link to="/servicepage">
        <div className=" mb-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 md:gap-4 md:p-5">
          {items.map((item, index) => (
            <div key={index}>
              <a
                href="#"
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
              >
                <img
                  alt={item}
                  className="h-56 w-full rounded-md object-cover"
                  src={images[index]}
                />

                <div className="mt-2">
                  <dl>
                    <div className="hidden md:flex">
                      <dt className="sr-only">Price</dt>

                      <dd className="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div className="hidden md:flex">
                      <dt className="sr-only">Address</dt>

                      <dd className="font-medium">
                        123 Wallaby Avenue, Park Road
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs ">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 place-content-center">
                      <svg
                        className="size-4 text-amber-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Parking</p>

                        <p className="font-medium">2 spaces</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 place-content-center">
                      <svg
                        className="size-4 text-amber-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Bathroom</p>

                        <p className="font-medium">2 rooms</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 place-content-center">
                      <svg
                        className="size-4 text-amber-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Bedroom</p>

                        <p className="font-medium">4 rooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};
export default CardTrending;
