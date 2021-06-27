import classes from './Input.module.css'

export const Input = ({ value, handleChangeInput }) => {
    return (
        <div className={ classes.root }>
            <input
                type="text"
                value={ value }
                onChange={ (e) => handleChangeInput(e.target.value) }
                placeholder="Введите сообщение"
            />
        </div>
    );
}