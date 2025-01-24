import { Checkbox, FormControlLabel } from '@mui/material';
import { changeTodoStatus, type Todo } from '../../services/LocalStorage';

export default function TodoOne({ todo, updateTodos }: { todo: Todo; updateTodos: () => void }) {
  const handleChangeTodoStatus = () => {
    changeTodoStatus(todo.description);
    updateTodos();
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={!todo.active}
          onChange={handleChangeTodoStatus}
        />
      }
      label={todo.description}
      sx={{
        backgroundColor: 'var(--BG-color-todos)',
        borderRadius: '10px',
        margin: '0',
        '& .MuiTypography-root': {
          textDecoration: !todo.active ? 'line-through' : 'none',
          opacity: !todo.active ? 0.5 : 1,
          wordWrap: 'break-word',
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        },
      }}
    />
  );
}
