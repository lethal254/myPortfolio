import React from 'react'
import ContentBox from "../components/ContentBox/ContentBox"
import Navbar from "../components/Navbar"

export default function Work() {
    return (
        <div className="work-page">
            <Navbar/>
                <div className="work-page-content">
                    <h1>MY WORK</h1>
                    <div className="underline"></div>
                        <div className="work-page-content-main">
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373__480.jpg"
                             bigTitle="WEATHER APP" smallTitle="html/css/js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2016/03/09/10/37/light-bulb-1246043__480.jpg"
                             bigTitle="TO-DO APP" smallTitle="React js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851__480.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview"/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview"/>
                        </div>

                </div>
        </div>
    )
}
