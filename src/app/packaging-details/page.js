import React from 'react'
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Contact from "~/sections/Contact";
import PackagingDetails from '~/sections/Packaging-details';

export default function PackagingDetailspage() {
    return (
        <div>
            <HeaderFour />
            <PackagingDetails />
            <Contact />
            <FooterThree />
            <Scroll />
        </div>
    )
}
