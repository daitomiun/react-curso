import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>react Router</h1>
      <a
        href="https://v5.reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        documentacion
      </a>
      <SongSearch />
      <CrudApi />
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
