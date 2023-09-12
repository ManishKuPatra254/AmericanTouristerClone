import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import styles from './HeroSection.module.css'
import { Fragment } from 'react';
import image1 from '../Images/615-2023_04_04-VK_CAMPAIGN_HOMEPAGE_BANNER_DESKTOP__1_ (1).jpg';
import image2 from '../Images/615-2023_04_04-VK_CAMPAIGN_HOMEPAGE_BANNER_DESKTOP__2_.jpg';
import image3 from '../Images/615-2023_04_04-VK_CAMPAIGN_HOMEPAGE_BANNER_DESKTOP__4_.jpg'
import image4 from '../Images/615-2023_04_24-2400x997pix_Road_Trip_Web_Banners.jpg';
import image5 from '../Images/615-2023_04_24-Hike_Desktop_2400x997_Aston.jpg'
import image6 from '../Images/615-2023_04_24-Hike_Desktop_2400x997_Magna.jpg'
import image7 from '../Images/615-2023_04_27-2400x997pix_School_Web_Banners_Edited.jpg'

export function HeroSection() {
    return (
        <Fragment>
            <Carousel autoPlay stopOnHover={false} showThumbs={false} infiniteLoop interval={2500}>
                <div className="">
                    <img src={image1} alt="" />
                </div>
                <div className="">
                    <img src={image2} alt="" />
                </div>
                <div className="">
                    <img src={image3} alt="" />
                </div>
                <div className="">
                    <img src={image4} alt="" />
                </div>
                <div className="">
                    <img src={image5} alt="" />
                </div>
                <div className="">
                    <img src={image6} alt="" />
                </div>
                <div className="">
                    <img src={image7} alt="" />
                </div>
            </Carousel>
        </Fragment>
    )
}