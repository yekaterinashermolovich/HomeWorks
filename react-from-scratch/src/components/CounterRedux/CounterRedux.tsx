import { increment } from "../../redux/slices/counterSlice";
import { decrement } from "../../redux/slices/counterSlice";
import {useTypedDispatch, useTypedSelector} from "../../store";
import { 
    increment as stepforward,
    decrement as  stepback  } from "../../redux/slices/stepSlice";



const CounterRedux = () => {
   const count = useTypedSelector(state => state.counterReducer);
   const step = useTypedSelector(state => state.stepSlice);
   const dispatch = useTypedDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement(step))}>-</button>
            {count}
            <button onClick={() => dispatch(increment (step))}>+</button>

            <button onClick={() => dispatch(stepback())}>-</button>
            {step}
            <button onClick={() => dispatch(stepforward())}>+</button>
            
            

        </div>
    )
}

export default CounterRedux