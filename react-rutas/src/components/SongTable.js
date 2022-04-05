import SongTableRow from "./SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
  // console.log("songs stored", mySongs);
  // console.log(mySongs.length > 0);
  return (
    <div>
      <h3>canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">artista</th>
            <th>cancion</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">sin canciones</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default SongTable;
