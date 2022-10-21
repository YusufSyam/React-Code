import React, { useState } from "react";

export interface ITextFieldComponentProps {
  text: string;
  isOkay?: boolean;
  num: number;
  fn?: () => number;
}

interface TextNode {
  text: string;
}

const TextFieldComponent: React.FC<ITextFieldComponentProps> = ({
  text,
  isOkay,
  num,
  fn
}) => {
  // const [currText, setText]= useState<TextNode>({text: 'oi goblek'})
  const [currNum, setNum] = useState<number>(num);

  return (
    <>
      <h1>
        {text} {currNum}
      </h1>
      <h2>{isOkay ? 3 : 4}</h2>
      <button
        className='text-green-400 bg-black'
        onClick={() => {
          setNum(currNum + 1);
        }}
      >
        Tekan supaya tambah
      </button>
    </>
  );
};

export default TextFieldComponent;
