import Button from '../../Button/Button';

const ButtonMinus = ({ setCount, count }) => {
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