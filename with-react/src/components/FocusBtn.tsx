import { useRef } from "react";

const FocusBtn = () => {
  const element = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    element.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default FocusBtn;
