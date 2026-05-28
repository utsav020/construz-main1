import Faq from "~/sections/Service-Details/Faq";
import ServiceDetails from "~/sections/Service-Details/ServiceDetails";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import CommpareBent from "~/sections/commpare-bent";
import Contect from "~/sections/Contact";
export default function GfrpMeshPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <ServiceDetails />
            <Faq />
            <CommpareBent />
            <Contect />
            <FooterThree />
            <Scroll />
        </div>
    );
}