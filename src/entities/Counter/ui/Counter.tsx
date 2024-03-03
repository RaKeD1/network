import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const counterValue = useSelector(getCounterValue);
    return (
        <div>
            <h2 data-testid="value-title">{counterValue}</h2>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                -
            </Button>
        </div>
    );
};
