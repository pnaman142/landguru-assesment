import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import Layout from "components/layout";
import Banner from "sections/banner";
import CtaOne from "sections/cta-one";
import FAQ from "sections/faq";
import CtaTwo from "sections/cta-two";
import WorkFlow from "sections/workflow";
import Pricing from "sections/pricing";
import PopularCourse from "sections/popular-course";
import CtaThree from "sections/cta-three";
import FavoriteCourse from "sections/favorite-course";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner />
          <FavoriteCourse />
          <CtaThree />
          <PopularCourse />
          <WorkFlow />
          <Pricing />
          <CtaTwo />
          <FAQ />
          <CtaOne />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
