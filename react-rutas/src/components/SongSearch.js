import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import SongPage from "../pages/SongPage";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import Songform from "./Songform";
import SongTable from "./SongTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      // console.log(artistRes, songRes)

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };
    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
    console.log(localStorage);
  }, [search, mySongs]);

  const handleSearch = (data) => {
    // console.log(data)
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("guardando cancion en favoritos");
    let currentSong = {
      search,
      lyric,
      bio,
    };
    let songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
    console.log("save song", localStorage);
  };
  const handleDeleteSong = (id) => {
    // alert(`eliminando cancion con id: ${id}`);
    let isDelete = window.confirm(
      `¿estas seguro de eliminar la cancion con el id "${id}"`
    );
    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };
  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>song search</h2>
          <NavLink to="/">home</NavLink>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <>
                    <Songform
                      handleSearch={handleSearch}
                      handleSaveSong={handleSaveSong}
                    />
                    <SongTable
                      mySongs={mySongs}
                      handleDeleteSong={handleDeleteSong}
                    />
                    {search && !loading && (
                      <SongDetails search={search} lyric={lyric} bio={bio} />
                    )}
                  </>
                }
              ></Route>
              <Route
                path="/:id"
                element={<SongPage mySongs={mySongs} />}
              ></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Route>
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
