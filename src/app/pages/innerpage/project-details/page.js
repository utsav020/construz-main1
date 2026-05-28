import ProjectDetails from "~/sections/Project-Details/ProjectDetails";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
export default function ProjectDetailsPage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <HeaderFour />
            <ProjectDetails />
            <FooterThree />
            <Scroll />
        </div>
    );
}