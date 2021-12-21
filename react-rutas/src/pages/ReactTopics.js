import { Link, Routes, Route, useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  // console.log(topic);
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        obcaecati aut, modi atque magni temporibus. Quia accusantium
        perspiciatis assumenda possimus. Aliquam maiores labore nemo, impedit
        totam quae nihil et laudantium!
      </p>
    </div>
  );
};
const ReactTopics = () => {
  // let match = useParams();
  // console.log(match);

  // let match = useRouteMatch();
  // console.log(match);
  // let { path, url } = useLocation();
  // console.log(path, url);

  return (
    <div>
      <h3>temas de react</h3>
      <ul>
        <li>
          <Link to="jsx">jsx</Link>
        </li>
        <li>
          <Link to="props">props</Link>
        </li>
        <li>
          <Link to="estado">estado</Link>
        </li>
        <li>
          <Link to="componentes">componentes</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path=""
          element={
            <>
              <h2>react docs</h2>
            </>
          }
        ></Route>
        <Route path="/:topic" element={<Topic></Topic>}></Route>
      </Routes>
    </div>
  );
};

export default ReactTopics;
