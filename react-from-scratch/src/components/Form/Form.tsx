import styles from './Form.module.scss';
import { useRef, useState } from 'react'
import FormInput from "./FormInput/FormInput";
import { InputData } from 'src/App';

type FormProps = {
    onSubmit: (formData: FormData) => void;
    inputsData: InputData[]

}

const Form = ({ onSubmit, inputsData }: FormProps) => {
    const formRef = useRef(null);
    const [invalidInputsCount, setInvalidInputsCount] = useState<number>(inputsData.length);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (formRef.current === null) return;
        const formData = new FormData(formRef.current);

        onSubmit(formData);
    }

    const inputs = inputsData.map(
        inputData => {
            if (inputData.pattern === '\\w{1,7}') return null;

            return <FormInput {...inputData} setInvalidInputsCount={setInvalidInputsCount}/>
        }
    )

    console.log(invalidInputsCount);

    return (
        <form
            ref={formRef}
            
            className={[
                styles.form,
                styles[`form--form-${invalidInputsCount === 0 ? '' : 'in'}valid`]
            ].join(' ')}
        >
            <legend>
                Full name
            </legend>

            {inputs}

            <button onClick = {handleSubmit} type="submit">Submit</button>
        </form>
    )
}

export default Form;