// import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import Error404 from "../pages/Error404";

const CrudApi = () => {
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

  return (
    <div>
      <HashRouter basename="santos">
        <header>
          <h2>CRUD API con rutas</h2>
          <nav>
            <NavLink to="/" activeclassname="active">
              santos
            </NavLink>
            <NavLink to="/agregar" activeclassname="active">
              agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <>
                  <h2>home de los santos</h2>
                  {loading && <Loader />}
                  {error && (
                    <Message
                      msg={`Error ${error.status}: ${error.statusText}`}
                      bgColor="#dc3545"
                    />
                  )}

                  {db && (
                    <CrudTable
                      data={db}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}
                    />
                  )}
                </>
              }
            ></Route>
            <Route
              path="/agregar"
              element={
                <>
                  <h2>agregar santos</h2>
                  <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                </>
              }
            ></Route>
            <Route
              path="/editar/:id"
              element={
                <>
                  <h2>editar santos</h2>
                  <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                </>
              }
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Route>
          {/* <Route path="/*" element={<Navigate to="/santos/" />} /> */}
          {/* navigate to default route if no url matched */}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
