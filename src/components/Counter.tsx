import classes from "./Counter.module.scss"
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)} className={classes.btn}>BUILD</button>
        </>

    );
};