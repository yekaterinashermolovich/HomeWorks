import './Slide.css';
import Div from '../../Div/Div';

const Slide = ({ slideData }) => {
    return (
        <Div className={'slide'}>
            <img src={slideData.imgSrc} alt={slideData.description} />
            <p>{slideData.description}</p>
        </Div>
    )
}

export default Slide;