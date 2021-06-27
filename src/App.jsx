import { useState, useEffect } from 'react';
import classes from './App.module.css';
import Screen from './components/Screen';
import Input from './components/Input';
import Button from './components/Button';
import { db } from './db';

const refMessages = db.ref('messages');

function App() {
  const [state, setState] = useState({
    messages: [],
    input: '',
  });

  useEffect(() => {
    refMessages.on('value', (data) => {
      const messages = Object.values(data.val() ?? []);
      setState((prev) => ({ ...prev, messages }));
    });
  }, []);

  const handleChangeInput = (newInput) => {
    setState((prev) => ({
      ...prev,
      input: newInput,
    }));
  };

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
