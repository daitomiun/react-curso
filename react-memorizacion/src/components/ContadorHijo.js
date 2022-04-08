import { memo, useMemo } from "react";

const Contadorhijo = ({ contador, sumar, restar }) => {
  //sin useMemo
  // let superNumero = 0;
  // for (let i = 0; i < 100000000; i++) {
  //   superNumero++;
  // }
  console.log("contador hijo se renderiza");

  //useMemo
  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 100000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>hijo del contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};
export default memo(Contadorhijo);
