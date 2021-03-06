import { useState, useEffect } from 'react';
import classes from './App.module.css';
import Screen from './components/Screen';
import Input from './components/Input';
import Button from './components/Button';
import { db } from './db';

/**
 * Ссылка на массив "messages" в БД
 * @constant
 */
const refMessages = db.ref('messages');

/**
 * Главный компонент, отрисовывает экран вывода сообщений, поле ввода и кнопку отправки
 */
function App() {
  /**
   * @property state.messages {Array<string>} - Массив сообщений
   * @property state.input {string} - значение поля ввода
  */
  const [state, setState] = useState({
    messages: [],
    input: '',
  });

  useEffect(() => {
    /**
     * После монтирования компонента запрашивает данные из БД. Если в БД null, то заприсывает в стейт пустой массив
     */
    refMessages.on('value', (data) => {
      const messages = Object.values(data.val() ?? []);
      setState((prev) => ({ ...prev, messages }));
    });
  }, []);

  /**
   * Обработчик onChange на input. Записывает в стейт новое значение поля ввода
   * @param {string} newInput - новое значение поля ввода
   */
  const handleChangeInput = (newInput) => {
    setState((prev) => ({
      ...prev,
      input: newInput,
    }));
  };

  /**
   * Обработчик onSubmin на form. Предотвращает перезагрузку страницы и если input не пустой, то записывает его содержимое в БД и очищает input
   * @param {Event} event - объект события
   */
  const sendMessage = (event) => {
    event.preventDefault();

    if (state.input !== '') {
      refMessages.push(state.input);
      handleChangeInput('');
    }
  }

  return (
    <div className={ classes.container }>
      <Screen messages={ state.messages }/>
      <form className={ classes.actions } onSubmit={ sendMessage }>
        <Input value={ state.input } handleChangeInput={ handleChangeInput } />
        <Button />
      </form>
    </div>
  );
}

export default App;
