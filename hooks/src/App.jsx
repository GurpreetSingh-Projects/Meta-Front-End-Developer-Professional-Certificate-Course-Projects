import Context from "./Context";
import Bird from "./bird";
import Calculator from "./calculator";
import Partialdisp from "./partialdisp";
import State from "./usestate";
export default function App() {
  return (
    <>
      <Context />
      <State />
      <Partialdisp />
      <Bird />
      <Calculator />
    </>
  );
}
