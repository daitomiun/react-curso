import { useReducer } from "react";

const initialState = { contador: 0 };

const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  // const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // const sumar = () => setContador(contador + 1);
  // const sumar = () => dispatch({ type: "INCREMENT" });
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  // const restar = () => setContador(contador - 1);
  // const restar = () => dispatch({ type: "DECREMENT" });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h2>contador reducer </h2>
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
