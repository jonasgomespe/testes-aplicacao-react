import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Contador from '../Contador';

describe('Testando componente Contador', () => {
  test('Verifica se o componente foi renderizado corretamente', () => {
    render(<Contador setContar={() => {}} setZerar={() => {}} />);
  });
  test('Verifica se existe botão zerar', () => {
    const {getByText} = render(
      <Contador setContar={() => {}} setZerar={() => {}} />,
    );

    const elemento = getByText('Zera contador');

    expect(elemento).toBeTruthy();
  });
});

describe('Testando eventos dos botões', () => {
  test('Verificar se o valor vem zero por padrão', () => {
    const {getByText} = render(
      <Contador setContar={() => {}} show={0} setZerar={() => {}} />,
    );

    const elemento = getByText('0');
    expect(elemento).toBeTruthy();
  });

  test('Verificar se o valor é incrementado quando é clicado no botão Contar', () => {
    const setContarTeste = jest.fn();

    const {getByTestId} = render(
      <Contador setContar={setContarTeste} show={1} setZerar={() => {}} />,
    );

    const botaoContar = getByTestId('zerar');
    expect(botaoContar).toBeTruthy();
  });

  interface propsBut {
    onClick: () => void;
    children: any;
  }

  const Button = ({onClick, children}: propsBut) => (
    <button onClick={onClick}>{children}</button>
  );

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.press(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
