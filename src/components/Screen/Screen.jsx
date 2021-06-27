import classes from './Screen.module.css';

export const Screen = ({ messages }) => {
    return (
        <div className={ classes.root }>
            { messages.map((massage, index) => (
                <div className={ classes.message } key={ index }>{ massage }</div>
            ))}
        </div>
    );
}