import React from "react";
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  const history = useNavigate();
  const handleEdit = () => {
    setDataToEdit(el);
    history(`/editar/${id}`);
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={handleEdit}>editar</button>
          <button onClick={() => deleteData(id)}>eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
