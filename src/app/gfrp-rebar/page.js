import Product from "~/sections/Shop/Product";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Contact from "~/sections/Contact";
export default function ShopPage() {
    return (
        <div>
            <HeaderFour />
            <Product />
            <Contact />
            <FooterThree />
            <Scroll />
        </div>
    );
}