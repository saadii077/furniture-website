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



export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
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
