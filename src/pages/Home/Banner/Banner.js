import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import caroPic1 from "../../../imgs/laptop-4.jpg";
import caroPic2 from "../../../imgs/laptop-2.jpg";
import caroPic3 from "../../../imgs/laptop-6.jpg";


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    style={{ height: "80vh" }}
                    src={caroPic1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    style={{ height: "80vh" }}
                    src={caroPic2}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded-3"
                    style={{ height: "80vh" }}
                    src={caroPic3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;