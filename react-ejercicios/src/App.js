import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";
import SelectsAnidados from './components/SelectsAnidados';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <h1>ejercicios con react</h1>
      <hr/>
      <SelectsAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>

    </>
  );
}

export default App;
