import BreadcumbSeven from "~/sections/Project/BreadcumbSeven";
import Project from "~/sections/Project/Project";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function ProjectPage() {
    return (
        <div>
            <HeaderFour />
            <Project />
            <FooterThree />
            <Scroll />
        </div>
    );
}