import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import TodoOne from './TodoOne';

describe('Проверка TodoOne', () => {
  it('Рендерим TodoOne', () => {
    const todoMOK = { description: 'test todo text', active: true };

    render(<TodoOne todo={todoMOK} updateTodos={() => {}} />);

    expect(screen.getByText('test todo text')).toBeInTheDocument();
  });
});
