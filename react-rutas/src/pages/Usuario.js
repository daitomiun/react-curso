import { useParams } from "react-router";

const Usuario = () => {
  // let params = useParams();
  // console.log(params);
  let { username } = useParams();
  console.log(username);
  return (
    <div>
      <h3>perfil de usuario</h3>
      <p>
        nombre de usuario
        <b>{username}</b>
      </p>
    </div>
  );
};

export default Usuario;
