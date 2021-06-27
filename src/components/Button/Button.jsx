import classes from './Button.module.css'

export const Button = ({ handleChangeInput }) => {
    
    const clickButton = () => {
        //TODO

        handleChangeInput('');
    }

    return (
        <div className={ classes.root }>
            <button onClick={ clickButton }>Отправить</button>
        </div>
    );

}