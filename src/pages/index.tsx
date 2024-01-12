import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import NewProductCard from "~/components/ProductCard";
import Hero from "~/components/Hero";
import Spinner from "~/components/Spinner";

export default function Home() {
  const { data: productData, isLoading } =
    api.product.getAllProducts.useQuery();
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex w-screen items-center justify-center p-2">
        {isLoading && <Spinner />}
        <div
          id="product"
          className="flex  flex-wrap items-center justify-center"
        >
          {productData?.map((product) => (
            <NewProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
