import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //    console.log(res)

        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      // console.log(res)

      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });

    // console.log(data)
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);

      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb([...db, res]);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿esta seguro de eliminar el id? '${id}'`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = { headers: { "content-type": "application/json" } };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    db,
    dataToEdit,
    error,
    loading,
    updateData,
    deleteData,
    createData,
    setDataToEdit,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
