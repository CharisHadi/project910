import React from "react";
import "./styles.css";
import Carousel from 'react-bootstrap/Carousel';

const imgStyle = {
    width: 600,
    height: 325
};

function Slide() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            src="./../../images/pollution1.jpg"
            alt="First slide"
            style={imgStyle}
            />
            <Carousel.Caption>
            <p>9 out of 10 people said they would recycle if it were “easier”.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="./../../images/pollution2.jpg"
            alt="Second slide"
            style={imgStyle}
            />

            <Carousel.Caption>
            <p>The leading cities for recycling in the US are (#1) San Francisco, CA (#2) Boston, MA (#3) Chicago, IL (#4) Denver, CO and (#5) Portland, OR.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="./../../images/pollution3.png"
            alt="Third slide"
            style={imgStyle}
            />

            <Carousel.Caption>
            <p>The U.S. recycling rate is around 34.5%. If we’re able to get the rate to 75%, the effect will be like removing 50 million passenger cars from U.S. roads.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="./../../images/pollution4.jpg"
            alt="Fourth slide"
            style={imgStyle}
            />

            <Carousel.Caption>
            <p>Recycling plastic saves twice as much energy as it takes to burn it.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            src="./../../images/pollution5.jpg"
            alt="Fifth slide"
            style={imgStyle}
            />

            <Carousel.Caption>
            <p>Over 11 million tons of recyclable clothing, shoes, and textiles make their way into landfills each year.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Slide;