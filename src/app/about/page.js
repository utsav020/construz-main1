import WhyChooseThree from "~/sections/About/WhyChooseThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import About from "~/sections/Home-2/About";
export default function AboutPage() {
  return (
    <>
      <HeaderFour />
      <About />
      <WhyChooseThree />
      <FooterThree />
      <Scroll />
    </>
  );
}
