import './Slider.css';
import { useState } from "react";
import Button from "../Button/Button";
import Slide from "./Slide/Slide";
import Div from "../Div/Div";

const Slider = ({ sliderData }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const updateSlideIndex = direction => {
        setSlideIndex((sliderData.length + slideIndex + direction) % sliderData.length);

        /*
        const newSlideIndex = slideIndex + direction;

        if (newSlideIndex === sliderData.length) setSlideIndex(0);
        else if (newSlideIndex === -1) setSlideIndex(sliderData.length - 1);
        else setSlideIndex(newSlideIndex);
        */
    }

    const handlePrevSlide = () => {
        updateSlideIndex(-1);
    }

    const handleNextSlide = () => {
        updateSlideIndex(1);
    }

    return (
        <Div className={'slider'}>
            <Button className={'slider-btn prev'} onClick={handlePrevSlide} />
            <Slide slideData={sliderData[slideIndex]}/>
            <Button className={'slider-btn next'} onClick={handleNextSlide} />
        </Div>
    )
}

export default Slider;