import React, { useRef, useEffect } from "react";
// import { useRe }

const Inputs = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default Inputs;
