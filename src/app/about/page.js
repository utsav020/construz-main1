import AboutThree from "~/sections/About/AboutThree";
import BlogThree from "~/sections/About/BlogThree";
// import Breadcumb from "~/sections/About/Breadcumb";
// import ClientThree from "~/sections/About/ClientThree";
import PortfolioThree from "~/sections/About/PortfolioThree";
import ProcessThree from "~/sections/About/ProcessThree";
import TeamThree from "~/sections/About/TeamThree/TeamThree";
import WhyChooseThree from "~/sections/About/WhyChooseThree";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import CounterThree from "~/sections/Common/Counter/CounterThree";
import TestimonialThree from "~/sections/Common/Testimonial/TestimonialThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import ClientReviews from "~/sections/clintreview";
import About from "~/sections/Home-2/About";
export default function AboutPage() {
  return (
    <>
      <HeaderFour />
      {/* <Breadcumb /> */}
      <About />
      <WhyChooseThree />
      {/* <ProcessThree /> */}
      <PortfolioThree />
      <CounterThree />
      {/* <TestimonialThree /> */}
      {/* <TeamThree /> */}
      {/* <ClientThree /> */}
      {/* <BlogThree /> */}
      <ClientReviews />
      <FooterThree />
      <Scroll />
    </>
  );
}
