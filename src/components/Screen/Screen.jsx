import { useEffect, useRef } from 'react';
import classes from './Screen.module.css';

export const Screen = ({ messages }) => {
    const ref = useRef();
    
    useEffect(() => {
        ref.current.scrollTo(0, ref.current.scrollHeight);
    });

    return (
        <div className={ classes.root } ref={ ref }>
            { messages.map((massage, index) => (
                <div className={ classes.message } key={ index }>{ massage }</div>
            ))}
        </div>
    );
}