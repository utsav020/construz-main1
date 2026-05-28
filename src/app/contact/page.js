import BreadcumbSix from "~/sections/Contact/BreadcumbSix";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactMap from "~/sections/Contact/ContactMap";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function ContactPage() {
  return (
    <div style={{overflow: "hidden"}}>
      <HeaderFour />
      <BreadcumbSix />
      <ContactArea />
      {/* <ContactAreaTwo /> */}
      <ContactMap />
      <FooterThree />
      <Scroll />
    </div>
  );
}
