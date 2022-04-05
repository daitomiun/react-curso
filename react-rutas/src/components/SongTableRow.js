import { useNavigate } from "react-router-dom";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let avatarStyles = {
    width: "auto",
    height: "40px",
  };
  // console.log(el);
  let history = useNavigate();
  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history(`/${id}`)}>ver</button>
        <button onClick={() => handleDeleteSong(id)}>eliminar</button>
      </td>
    </tr>
  );
};
export default SongTableRow;
