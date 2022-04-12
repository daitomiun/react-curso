import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  let { name, constellation, id } = el;
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>editar</button>
          <button onClick={() => deleteData(id)}>eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
