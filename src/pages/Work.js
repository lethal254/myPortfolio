import React from 'react'
import ContentBox from "../components/ContentBox/ContentBox"
import Navbar from "../components/Navbar"

export default function Work() {
    return (
        <div className="work-page">
            <Navbar/>
                <div className="work-page-content">
                    <h1 className="work-page-content-header">MY WORK</h1>
                    <div className="underline"></div>
                        <div className="work-page-content-main">
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview" description="Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

                             "/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview" description="Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

                             "/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview" description="Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

                             "/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2017/10/10/21/47/computer-2838920_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview" description="Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

                             "/>
                            <ContentBox imageLink="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
                             bigTitle="WEGO WEBSITE" smallTitle="React js" buttonText="Preview" description="Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

                             "/>
                        </div>

                </div>
        </div>
    )
}
