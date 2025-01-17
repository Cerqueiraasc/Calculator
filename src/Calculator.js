import React, { useState } from 'react';
import styled from 'styled-components';

// Componentes estilizados usando styled-components
const CalculatorWrapper = styled.div`
  width: 300px;
  margin: 50px auto;
  background: #2d3e45;
  border-radius: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
`;

const Display = styled.div`
  height: 60px;
  background: #e0e0e0;
  border-radius: 10px;
  text-align: right;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  height: 60px;
  background: ${(props) => (props.isAction ? '#ffae42' : '#4a595f')};
  color: ${(props) => (props.isAction ? '#000' : '#fff')};
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.isAction ? '700' : '500')};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.isAction ? '#ffc572' : '#3c4a50')};
  }
`;

const Calculator = () => {
  const [input, setInput] = useState('');

  // Funções de interação com a calculadora
  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <CalculatorWrapper>
      <Display>{input}</Display>
      <ButtonsContainer>
        {/* Primeira linha de botões */}
        <Button onClick={clearInput} isAction>C</Button>
        <Button onClick={() => setInput('')} isAction>AC</Button>
        <Button onClick={() => handleInput('/')} isAction>&divide;</Button>
        <Button onClick={() => handleInput('*')} isAction>&times;</Button>

        {/* Segunda linha */}
        <Button onClick={() => handleInput('7')}>7</Button>
        <Button onClick={() => handleInput('8')}>8</Button>
        <Button onClick={() => handleInput('9')}>9</Button>
        <Button onClick={() => handleInput('-')} isAction>-</Button>

        {/* Terceira linha */}
        <Button onClick={() => handleInput('4')}>4</Button>
        <Button onClick={() => handleInput('5')}>5</Button>
        <Button onClick={() => handleInput('6')}>6</Button>
        <Button onClick={() => handleInput('+')} isAction>+</Button>

        {/* Quarta linha */}
        <Button onClick={() => handleInput('1')}>1</Button>
        <Button onClick={() => handleInput('2')}>2</Button>
        <Button onClick={() => handleInput('3')}>3</Button>
        <Button onClick={calculateResult} isAction>=</Button>

        {/* Última linha */}
        <Button onClick={() => handleInput('0')} style={{ gridColumn: 'span 2' }}>0</Button>
        <Button onClick={() => handleInput('.')}>.</Button>
      </ButtonsContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;