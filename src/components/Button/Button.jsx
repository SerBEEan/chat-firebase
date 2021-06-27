import classes from './Button.module.css'

/**
 * Компонент кнопки "Отправить"
 */
export const Button = () => {
    return (
        <div className={ classes.root }>
            <button type="submit">Отправить</button>
        </div>
    );

}