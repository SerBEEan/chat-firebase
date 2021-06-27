import classes from './Input.module.css'

/**
 * Тип для функции handleChangeInput
 * @callback THandleChangeInput
 * @param {string} newValue - новое значение поля ввода
 * @returns {void}
 */

/**
 * Компонент поля ввода
 * @param {Object} props - пропсы компонента
 * @param {string} props.value - значение поля ввода
 * @param {THandleChangeInput} props.handleChangeInput - обработчик onChange
 */
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

// @param {{value: string, handleChangeInput}} props -  