import React,{useEffect} from "react";
import {
  HeadLine
} from "../../components/component";
import Meta from "../../components/Meta";
import Hero_4 from "../../components/hero/hero_4";
import Hero_5 from '../../components/hero/hero_5';
import Characters from "../../components/characters";
import { useTheme } from "next-themes";
import CoverflowCarousel from '../../components/carousel/coverflowCarousel'
import FilterCategoryItem from "../../components/categories/filterCategoryItem";


const Home_4 = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  return (
    <>
      <Meta title="SycoticSociety | NFT Marketplace" />
      <Hero_5 />
      <Hero_4 />
      
      <CoverflowCarousel/>
      {/* <Top_collection /> */}
      {/* <Auctions_categories /> */}
      <section id="cards" className="py-24">
        <div className="container">
          <HeadLine
        
	          text="" 
            classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white animate-gradient"
          />
	  
        
        </div>
      </section>
      {/* <NewseLatter bgWhite={true} /> */}
      {/* <Feature_collections />
			<Partners /> */}
    </>
  );
};

export default Home_4;
