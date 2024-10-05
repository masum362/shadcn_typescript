import { FormEvent, useRef, useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setUser({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
        />
        <input
          ref={email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.password}</h1>
      </div>
    </>
  );
};

export default Form;
