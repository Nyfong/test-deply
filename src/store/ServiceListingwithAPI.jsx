// import { useEffect, useState } from "react";
// import { getAllProduct } from "./getAllProduct";
// import CardShowService from "../components/cards/homepage/Services-Cards";
// import { ProductCardClone } from "./CardClone";
// import Lottie from "lottie-react";
// import Loading from "../components/animations/loading.json";
// import Loading2 from "../components/animations/loadingAmongUs.json";
// import { data } from "autoprefixer";
// import { SearchBar } from "../components/seaction/searchpage/SearchBar";
// export function TestAPI() {
//   // const [count, setCount] = useState(0);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState();
//   const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
//   useEffect(() => {
//     async function fetchAllProduct(params) {
//       setLoading(true);
//       const product = await getAllProduct();
//       setData(product);
//       setLoading(false);
//     }
//     fetchAllProduct();
//   }, []);
//   getAllProduct();
//   const handleSearch = async (query, category) => {
//     setLoading(true);
//     const products = await getAllProduct(category); // Fetch products with selected category
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//     setLoading(false);
//   };
//   return (
//     <>
//       {/* grid grid-cols-1 sm:grid-cols-2  md:grid-grid-cols-3 lg:grid-cols-4 gap-4 p-3 */}
//       <div className="text-center">Easy Found API</div>
//       <SearchBar onSearch={handleSearch} />{" "}
//       {/* Pass search handler to SearchBar */}
//       <div className=" gap-10 p-10">
//         {loading && (
//           <div className="text-center">
//             <Lottie
//               animationData={Loading}
//               className="h-[400px]"
//               loop={true}
//             ></Lottie>
//           </div>
//         )}
//         {!loading &&
//           filteredProducts.map((product) => (
//             <ProductCardClone
//               title={product.name}
//               price={product.price}
//               description={product.description}
//               id={product.id}
//               images={
//                 product?.image ??
//                 "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
//               }
//             />
//           ))}
//       </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { getAllProduct } from "./getAllProduct";
import { ProductCardClone } from "./CardClone";
import Lottie from "lottie-react";
import Loading from "../components/animations/loading.json";
import { SearchBar } from "../components/seaction/searchpage/SearchBar";
import LogoGP from "../assets/img/LogoCP1.png";
// export function TestAPI() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const fetchFilteredProducts = async (category) => {
//     setLoading(true);
//     const products = await getAllProduct(category);
//     setData(products);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchFilteredProducts(selectedCategory); // Fetch products when category changes
//   }, [selectedCategory]);

//   // return (
//   //   <>
//   //     <div className="max-w-screen-xl min-w-80 mx-auto  p-5  md:p-0 ">
//   //       <div className="text-center">Easy Found API</div>
//   //       <SearchBar onCategorySelect={setSelectedCategory} />{" "}
//   //       {/* Pass the setSelectedCategory function */}
//   //       <div className="gap-10 p-10">
//   //         {loading && (
//   //           <div className="text-center">
//   //             <Lottie
//   //               animationData={Loading}
//   //               className="h-[400px]"
//   //               loop={true}
//   //             />
//   //           </div>
//   //         )}
//   //         {!loading &&
//   //           data.map((product) => (
//   //             <ProductCardClone
//   //               key={product.id}
//   //               title={product.name}
//   //               price={product.price}
//   //               description={product.description}
//   //               id={product.id}
//   //               images={
//   //                 product?.image ??
//   //                 "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
//   //               }
//   //             />
//   //           ))}
//   //       </div>
//   //     </div>
//   //   </>
//   // );
//   return (
//     <>
//       <div className="max-w-screen-xl min-w-80 mx-auto p-5 md:p-0">
//         <div className="text-center">Easy Found API</div>

//         <div className="gap-10 p-10">
//           {/* Show loading animation until the data is loaded */}
//           {loading ? (
//             <div className="text-center">
//               <Lottie
//                 animationData={Loading}
//                 className="h-[400px]"
//                 loop={true}
//               />
//             </div>
//           ) : (
//             <>
//               {/* Display the search bar only after loading is done */}
//               <SearchBar onCategorySelect={setSelectedCategory} />

//               {/* Render product cards once data is available */}
//               <div className=" p-3">
//                 {data.map((product) => (
//                   <ProductCardClone
//                     key={product.id}
//                     title={product.name}
//                     price={product.price}
//                     description={product.description}
//                     id={product.id}
//                     images={
//                       product?.image ??
//                       "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
//                     }
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
export function TestAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchAllProduct = async (category) => {
    setLoading(true);
    const product = await getAllProduct(category); // Fetch products based on selected category
    setData(product);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProduct(selectedCategory); // Fetch products when selectedCategory changes
  }, [selectedCategory]);

  return (
    <>
      <div className="max-w-screen-xl min-w-80 mx-auto p-5 md:p-0">
        <div className="flex sticky top-[55px]  justify-center md:justify-start">
          <SearchBar onCategorySelect={setSelectedCategory} />
        </div>

        <div className="gap-10 p-10">
          {loading && (
            <div className="text-center">
              <Lottie
                animationData={Loading}
                className="h-[400px]"
                loop={true}
              />
            </div>
          )}
          {!loading &&
            data.map((product) => (
              <ProductCardClone
                key={product.id}
                title={product.name}
                category={product.category}
                day={product.working_days}
                price={product.price}
                description={product.description}
                id={product.id}
                images={product?.image ?? LogoGP}
              />
            ))}
        </div>
      </div>
    </>
  );
}
