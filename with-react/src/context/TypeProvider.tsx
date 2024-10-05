import { createContext, FC, ReactNode, useState } from "react";

interface ContextTypes {
  count: number;
  increment: () => void;
  decrement: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

export const TypeContext = createContext<ContextTypes>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const TypeProvider: FC<ProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <TypeContext.Provider value={{ count, increment, decrement }}>
      {children}
    </TypeContext.Provider>
  );
};

export default TypeProvider;
