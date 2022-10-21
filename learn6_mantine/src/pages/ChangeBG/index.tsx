import React, {useRef, useState, useEffect} from "react";

export interface IChangeBG {
  colorArray: string[];
}

const ChangeBG: React.FC<IChangeBG> = ({ colorArray }) => {
  const colorRef = useRef<HTMLDivElement>(document.createElement("div"))
  const buttonRef= useRef<HTMLButtonElement>(document.createElement("button"))

  const [colorIndex, setColorIndex] = useState<number>(0)
  colorRef.current.style.backgroundColor= colorArray[colorIndex]
  buttonRef.current.className= `bg-${colorArray[colorIndex]}-500`

  useEffect(
    ()=>{
      colorRef.current.style.backgroundColor= colorArray[colorIndex]
      buttonRef.current.className= `bg-${colorArray[colorIndex]}-500`
    },[]
  )

  const onChangeColor = () => {
    setColorIndex((colorIndex+1)%colorArray.length)
    // console.log((colorIndex+1)%colorArray.length)
  }

  return (
    <>
      <h2>Colors: {colorArray.toString()}</h2>
      <div ref={colorRef}> Halo Aku Warna {colorArray[colorIndex]}</div>
      <button ref={buttonRef} onClick={onChangeColor}>Ganti Warna</button>
    </>
  );
};
export default ChangeBG;
