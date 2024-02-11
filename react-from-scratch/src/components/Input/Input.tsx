import { forwardRef } from "react";

type InputProps = {
    id: string,
    type: string,
    name: string
    onInput: (e: React.FormEvent<HTMLInputElement>) => void
}


const Input = forwardRef (({id, type, name, onInput}: InputProps, ref: React.ForwardedRef<HTMLInputElement> ) => {
    return <input
    id={id}
    type={type}
    name={name}
    ref={ref}
    onInput={onInput}
/>
});


export default Input; 