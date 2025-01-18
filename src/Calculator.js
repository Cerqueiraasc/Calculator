import React, { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  width: 300px;
  margin: 50px auto;
  background: #2d3e45;
  border-radius: 15px;
  box-shadow: 0px 3px 10px rgba(0,0,0, 0.3);
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
    background: ${(props) => (props.isAction ? '#ffc572' : '#3c4a50')}
  }
  `;

  const Calculator = () => {
    const [input, setInput] = useState('');

    const handInput = (value) => {
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
        
          <Button onClick={clearInput} isAction>C</Button>
          <Button onClick={() => setInput ('')} isAction>AC</Button>
          <Button onClick={() => handInput ('/')} isAction>/</Button>
          <Button onClick={() => handInput ('*')} isAction>x</Button>

          <Button onClick={() => handInput ('7')}>7</Button>
          <Button onClick={() => handInput ('8')}>8</Button>
          <Button onClick={() => handInput ('9')}>9</Button>
          <Button onClick={() => handInput ('-')} isAction>-</Button>

          <Button onClick={() => handInput ('4')}>7</Button>
          <Button onClick={() => handInput ('5')}>8</Button>
          <Button onClick={() => handInput ('6')}>9</Button>
          <Button onClick={() => handInput ('+')} isAction>+</Button>

          <Button onClick={() => handInput ('1')}>1</Button>
          <Button onClick={() => handInput ('2')}>2</Button>
          <Button onClick={() => handInput ('3')}>3</Button>
          <Button onClick= {calculateResult} isAction>=</Button>

          <Button onClick={() => handInput('0')} style={{ gridColumn: 'span 2'}}>0</Button>
          <Button onClick={() => handInput('.')}>.</Button>
          </ButtonsContainer>
      </CalculatorWrapper>
  );
};

export default Calculator;