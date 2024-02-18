import Button from '../../Button/Button';
import { useContext } from "react";
import {CountContext} from "../Counter";

type ButtonMinusProps = {
     setCount: React.Dispatch<React.SetStateAction<number>>
}


const ButtonMinus = ({ setCount}:ButtonMinusProps) => {

    const count = useContext(CountContext);

    const handleMinus = () => {
		setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
	}

    return (
        <Button onClick={handleMinus}>-</Button>
    )
}

export default ButtonMinus;