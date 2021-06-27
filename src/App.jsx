import { useState } from 'react';
import classes from './App.module.css';
import Screen from './components/Screen';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [state, setState] = useState({
    messages: ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
    input: '',
  })

  const handleChangeInput = (newInput) => {
    setState((prev) => ({
      ...prev,
      input: newInput,
    }));
  };

  return (
    <div className={ classes.container }>
      <Screen messages={ state.messages }/>
      <div className={ classes.actions }>
        <Input value={ state.input } handleChangeInput={ handleChangeInput } />
        <Button handleChangeInput={ handleChangeInput } />
      </div>
    </div>
  );
}

export default App;
