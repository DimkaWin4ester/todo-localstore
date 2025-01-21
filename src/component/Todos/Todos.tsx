import { Button, Container, Typography } from '@mui/material';
import type { Todo } from '../../services/LocalStorage';
import TodoOne from './TodoOne';
import { useState } from 'react';

export default function Todos({
  todos,
  updateTodos,
}: {
  todos: Todo[];
  updateTodos: () => void;
}) {
  const [filterMode, setFilterMode] = useState<'all' | 'active' | 'completed'>('all');

  const getFilteredTodos = () => {
    switch (filterMode) {
      case 'active':
        return todos.filter((todo) => todo.active);
      case 'completed':
        return todos.filter((todo) => !todo.active);
      default:
        return todos;
    }
  };

  const deleteCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => todo.active);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    updateTodos();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
      disableGutters
    >
      {getFilteredTodos().map((todo: Todo) => (
        <TodoOne todo={todo} key={todo.description} updateTodos={updateTodos} />
      ))}

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--BG-color-todos)',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <Typography variant="body1">Всего: {todos.length}</Typography>
        <Button onClick={() => setFilterMode('all')}>Все</Button>
        <Button onClick={() => setFilterMode('completed')}>Выполненные</Button>
        <Button onClick={() => setFilterMode('active')}>Не выполненные</Button>
        <Button onClick={deleteCompletedTodos}>Удалить выполненные</Button>
      </Container>
    </Container>
  );
}
