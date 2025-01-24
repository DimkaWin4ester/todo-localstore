import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Проверка TodoOne', () => {
  it('Рендерим TodoOne', () => {
    render(<Form updateTodos={() => {}}/>);

    const inputElement = screen.getByPlaceholderText('Делишки?');
    expect(inputElement).toBeInTheDocument();
  });
});
