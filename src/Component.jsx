import React from 'react';

const Component = () => {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React";

  return(
    <div>
      <h1>This is exercise 2.2</h1>
      <div>{data[0] + " " + data[1]}</div>
      <div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
      <div>{`The string's length is ${string.length}`}</div>
    </div>
  )
}

export default Component;