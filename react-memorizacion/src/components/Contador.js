import { useCallback, useState } from "react";
import Contadorhijo from "./ContadorHijo";

const Contador = () => {
  const [Contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //useCallback
  const sumar = useCallback(() => setContador(Contador + 1), [Contador]);
  const restar = useCallback(() => setContador(Contador - 1), [Contador]);
  const handleInput = (e) => setInput(e.target.value);

  //sin useCallback
  // const sumar = () => setContador(Contador + 1);
  // const restar = () => setContador(Contador - 1);
  // const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{Contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <Contadorhijo contador={Contador} sumar={sumar} restar={restar} />
    </div>
  );
};
export default Contador;
