import {state, useState} from "react";
export default function Partialdisp()
{
  const [name, setName] = useState("");
  return (
    <>
      <h1>{name}</h1>
      <input type="text"  />
      <button onSubmit={() => setName("Roshan")}>Click me</button>
    </>
  );
}