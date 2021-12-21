import { useNavigate, useLocation } from "react-router";

const Productos = () => {
  // let location = useLocation();
  // console.log(location);
  let { search } = useLocation();
  // console.log(search);
  let query = new URLSearchParams(search);
  // console.log(query);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  // console.log(start, end);

  let navigate = useNavigate();
  // navigate("/productos");
  // console.log(navigate);

  const handlePrev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };
  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <div>
      <h3>productos</h3>
      <p>
        mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>atras</button>}
      <button onClick={handleNext}>adelante</button>
    </div>
  );
};

export default Productos;
