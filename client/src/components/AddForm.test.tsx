/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from './AddForm';

const setProducts = jest.fn();

test("Form doesn't exist in the document before button is clicked.", () => {
  render(<AddForm products={[]} setProducts={setProducts} />);
  expect(() => screen.getByTestId('add-form')).toThrow();
});

test('Form is rendered when button is clicked.', async () => {
  render(<AddForm products={[]} setProducts={setProducts} />);
  const user = userEvent.setup();
  const link = screen.getByRole('link', {
    name: /Add A Product/i,
  });
  await user.click(link);

  const formElement = screen.getByTestId('add-form');

  expect(formElement).toBeInTheDocument();
});

test('Changes the input state when Product Name is changed.', async () => {
  render(<AddForm products={[]} setProducts={setProducts} />);
  const user = userEvent.setup();
  const link = screen.getByRole('link', {
    name: /Add A Product/i,
  });
  await user.click(link);
  const inputBody = screen.getByRole('textbox', {
    name: /Product Name/i,
  });
  await user.type(inputBody, 'Test Product');
  expect(inputBody).toHaveValue('Test Product');
});

test('Changes the input state when Product Price is changed.', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
});

test('Changes the input state when Product Quantity is changed.', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
});

// Typing Works

// On Cancel Unmounts Form

// On Submit Fires Once
