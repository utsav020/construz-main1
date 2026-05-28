import "~/public/main-assets/css/fonts.css";
import "./globals.css";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import About from "~/sections/Home-2/About";
import Hero from "~/sections/Home-2/Hero";
import Process from "~/sections/Home-2/Process";
import Service from "~/sections/Home-2/Service";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Contact from "~/sections/Contact";

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <Hero />
      <About />
      <Service />
      <Process />
      <Contact />
      <FooterThree />
      <Scroll />
    </div>
  );
}
