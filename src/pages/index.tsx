import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Herobanner from "~/components/Herobanner";
import { api } from "~/utils/api";
import Gridcategory from "~/components/Gridcategory";
import ProductCard from "~/components/ProductCard";
import { useRouter } from "next/router";

export default function Home() {
const router = useRouter();
const {data:productData} = api.product.getAllProducts.useQuery()
const {data:singleProductData} = api.product.getProductById.useQuery({
  id:"2"
})
const {data:categoryData} = api.category.getAllcategory.useQuery()

  return (
    <>
    <Navbar/>
    <Herobanner/>
    <Gridcategory/>
    <div className="mx-2 mt-10 grid grid grid-cols-2 md:grid-cols-4 gap-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
  <div>
    {
      productData?.map((product)=>
      <div>{product.title}</div>
      )
    }
  </div>
  <Footer/>
    </>
  );
}

