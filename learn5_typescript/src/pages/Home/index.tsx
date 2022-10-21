import React from "react";
import TextFieldComponent from "../../components/TextField";

export default function Home() {
  return (
    <>
      <TextFieldComponent text="hi" num={1} isOkay={true} />
      <TextFieldComponent text="hi" num={2} />
    </>
  );
}
