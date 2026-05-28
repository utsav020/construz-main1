import BreadcumbTwelve from "~/sections/Shop-Details/BreadcumbTwelve";
import ProductDetails from "~/sections/Shop-Details/ProductDetails";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
export default function ShopDetailsPage() {
    return (
        <div>
            <HeaderFour />
            <BreadcumbTwelve />
            <ProductDetails />
            <Scroll />
        </div>
    );
}