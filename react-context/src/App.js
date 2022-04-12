import "./App.css";
import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>react context api</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        documentacion
      </a>
      <hr />
      <MyPage />
      <hr />
      <MyPageContext />
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </div>
  );
}

export default App;
