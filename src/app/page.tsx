import Bloglatest from "./components/Homesection/Bloglatest";
import Discountitems from "./components/Homesection/Discountitems";
import FeaturedProducts from "./components/Homesection/Featureproducts";
import Hero from "./components/Homesection/Hero";
import LatestProducts from "./components/Homesection/Latestproducts";
import Newslattor from "./components/Homesection/Newslattor";
import Shopex from "./components/Homesection/Shopex";
import Topcategories from "./components/Homesection/Topcategories";
import Trending from "./components/Homesection/Trending";
import Uniquefeatures from "./components/Homesection/Uniquefeatures";
import ProductCards from "./products/page";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  // Featured products data fetch
  const query1 = ` *[_type == "product" && isFeaturedProduct]{
    _id,
    name,
    "image":image.asset->url,
    price,
    stockLevel,
    category,
    discountPercentage
  }`;
  const featuredData1 = await client.fetch(query1);

  const query2 = ` *[_type == "product"]{
    _id,
    name,
    "image":image.asset->url,
    price,
    stockLevel,
    category,
    discountPercentage
}[0...6]`;
  const latestProduct = await client.fetch(query2);





  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <FeaturedProducts  data={featuredData1} /> 
      <LatestProducts data={latestProduct} />
      <Shopex />
      <Uniquefeatures />
      <Trending />
      <Discountitems />
      <Topcategories />
      <Newslattor />
      <Bloglatest />
      
    </main>
  );
}
