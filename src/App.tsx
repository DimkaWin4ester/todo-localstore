import { Container, Typography } from '@mui/material';
import Form from './component/Form/Form';
import Todos from './component/Todos/Todos';
import { useEffect, useState } from 'react';
import { getAllTodos } from './services/LocalStorage';

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodos = () => setTodos(getAllTodos());

  useEffect(() => {
    setTodos(getAllTodos());
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: 'var(--BG-color-app)',
        borderRadius: '10px',
        padding: '30px',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1" align="center" color="primary" fontWeight={100}>
        todos
      </Typography>
      <Form updateTodos={updateTodos} />
      <Todos todos={todos} updateTodos={updateTodos} />
      
    </Container>
  );
}

export default App;
