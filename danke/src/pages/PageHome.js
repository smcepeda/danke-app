import React from "react";
import PageHero from "./PageHero";
import PageAbout from "./PageAbout";
import PageFeature from "./PageFeature";
import PageWorks from "./PageWorks";
import PageFaq from "./PageFaq";
import PagePricing from "./PagePricing";
import PageContact from "./PageContact";

function PageHome() {
  return (
    <div className="main">
      <PageHero />
      <PageAbout />
      <PageFeature />
      <PageWorks />
      <PagePricing />
      <PageFaq />
      <PageContact />
    </div>
  );
}

export default PageHome;
