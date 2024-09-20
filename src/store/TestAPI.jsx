import { useEffect, useState } from "react";
import { getAllProduct } from "./getAllProduct";
import CardShowService from "../components/cards/homepage/Services-Cards";
import { ProductCardClone } from "./CardClone";
import Lottie from "lottie-react";
import Loading from "../components/animations/loading.json";
import Loading2 from "../components/animations/loadingAmongUs.json";
import { data } from "autoprefixer";
export function TestAPI() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    async function fetchAllProduct(params) {
      setLoading(true);
      const product = await getAllProduct();
      setData(product);
      setLoading(false);
    }
    fetchAllProduct();
  }, []);
  getAllProduct();
  return (
    <>
      {/* grid grid-cols-1 sm:grid-cols-2  md:grid-grid-cols-3 lg:grid-cols-4 gap-4 p-3 */}
      <div className="text-center">Dummy API</div>
      <div className=" gap-10 p-10">
        {loading && (
          <div className="text-center">
            <Lottie
              animationData={Loading}
              className="h-[400px]"
              loop={true}
            ></Lottie>
          </div>
        )}
        {!loading &&
          data.map((product) => (
            <ProductCardClone
              title={product.name}
              price={product.price}
              description={product.description}
              id={product.id}
              images={
                product?.image ??
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
            />
          ))}
      </div>
    </>
  );
}
