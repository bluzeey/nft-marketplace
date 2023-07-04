import React, { useEffect, useState } from "react";
import Benifits from "../../components/dao/Benifits";
import Intro from "../../components/dao/Intro";
import Participate from "../../components/dao/Participate";
import NewseLatter2 from "../../components/dao/newseLatter2";
import { Partners } from "../../components/component";
import Hero_9 from "../../components/hero/hero_9";
import Meta from "../../components/Meta";
import TrustedPartner from "../../components/dao/TrustedPartner";

const Home_9 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 9 || Xhibiter | NFT Marketplace Next.js Template" />
      <Hero_9 />
      <Intro />
      <Benifits />
      <Participate />
      <TrustedPartner />
    </>
  );
};

export default Home_9;