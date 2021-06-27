import { useEffect, useRef } from 'react';
import classes from './Screen.module.css';

/**
 * Компонент экрана для вывода сообщений. Отрисовывает массив сообщений.
 * @param {Object} props - пропсы компонента
 * @param {Array<string>} props.messages - массив сообщений
 */
export const Screen = ({ messages }) => {
    const ref = useRef();
    
    useEffect(() => {
        /**
         * Автоскролл содержимого экрана на каждом рендеринге, если содержимое не помещается на экране
         */
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