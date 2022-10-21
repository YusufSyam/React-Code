import React, {useRef, useState, useEffect} from "react";

export interface IChangeBG {
  colorArray: string[];
}

const ChangeBG: React.FC<IChangeBG> = ({ colorArray }) => {
  const colorRef = useRef<HTMLDivElement>(document.createElement("div"))
  const [colorIndex, setColorIndex] = useState<number>(0)
  colorRef.current.style.backgroundColor= colorArray[colorIndex]

  useEffect(
    ()=>{
      colorRef.current.style.backgroundColor= colorArray[colorIndex]
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
      <button onClick={onChangeColor}>Ganti Warna</button>
    </>
  );
};
export default ChangeBG;
