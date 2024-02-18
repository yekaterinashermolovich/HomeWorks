import Div from "../../Div/Div";
import { useContext } from "react";
import {SetCountContext} from "../Counter";
import ButtonMinus from "../ButtonMinus/ButtonMinus";
import ButtonPlus from "../ButtonPlus/ButtonPlus";



const SetCount = () => {

    const info = useContext(SetCountContext)
    return (
        <>
        <ButtonPlus {setCount} />
        <ButtonMinus {setCount} />
        </>
    )
}

export default SetCount;