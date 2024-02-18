import Button from '../../Button/Button';
import { useContext } from 'react';
import { SetCountContext } from '../Counter';





const ButtonPlus = ({ setCount }) => {
    const setCount = useContext(SetCountContext)!;
    const handlePlus = () => {
		setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
	}

    return (
        <Button onClick={handlePlus}>+</Button>
    )
}

export default ButtonPlus;