import classes from './Button.module.css'

export const Button = () => {
    return (
        <div className={ classes.root }>
            <button type="submit">Отправить</button>
        </div>
    );

}