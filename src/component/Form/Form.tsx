import { Button, Input } from '@mui/material';
import { addTodo } from '../../services/LocalStorage';
import { useState } from 'react';
import '../../styles/app.css';

export default function Form({ updateTodos }: { updateTodos: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      addTodo(trimmedValue);
      setInputValue('');
      updateTodos();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Делишки?"
        fullWidth
        disableUnderline
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && (
        <Button type="submit" sx={{ maxHeight: '30px' }}>
          Добавить
        </Button>
      )}
    </form>
  );
}
