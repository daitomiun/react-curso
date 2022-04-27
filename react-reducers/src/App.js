import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>Use reducers</h1>
      <ShoppingCart />
      <ContadorMejorado />
      <Contador />
    </div>
  );
}

export default App;
