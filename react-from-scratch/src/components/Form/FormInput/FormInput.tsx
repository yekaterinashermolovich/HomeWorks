import { InputData } from 'src/App';
import Input from '../../Input/Input'
import styles from './FormInput.module.scss';
import { useRef, useState } from 'react'
import { useId } from 'react'

type FormInputProps = InputData & {
    setInvalidInputsCount: React.Dispatch<React.SetStateAction<number>>
}



const FormInput = ({ labelText, type = 'text', name, pattern, setInvalidInputsCount }: FormInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();

    const [isValid, setIsValid] = useState(false);

    const handleInput = ()  => {
        if(inputRef.current === null) return;

        const regexp = new RegExp(`^${pattern}$`, 'ig');

        const isValidValue = regexp.test(inputRef.current.value);

        inputRef.current.dataset.isValid = isValidValue.toString();

        setIsValid(isValidValue);

        setInvalidInputsCount((prevInvalidCount: number) => {
            if (isValidValue === isValid) return prevInvalidCount;

            return prevInvalidCount + (isValidValue ? -1 : 1);
        });
    }

    return (
        <>
            <div className={styles['form-input']}>
                <label htmlFor={id}>{labelText}</label>
                <Input ref={inputRef} id={id} type={type} name={name} onInput={handleInput} />
                
            </div>
        </>
    );
}

export default FormInput;