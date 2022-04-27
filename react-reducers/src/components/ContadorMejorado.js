import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const Contador = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h2>contador reducer mejorado </h2>
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
        <button onClick={reset}>reset</button>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
