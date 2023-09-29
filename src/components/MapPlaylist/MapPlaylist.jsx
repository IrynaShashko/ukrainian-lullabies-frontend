import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData, selectLoading } from "../../redux/DataSlice";
import './MapPlaylist.css';
import classNames from "classnames";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { Link } from "react-router-dom";

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  const handleVideoChange = (url, id, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    dispatch(setCurrentId(id));
    dispatch(setCurrentName(name));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    !loading && data && (
      <section id="anima" className="playlist margin-bottom">
        <div className="map-playlist_container"></div>

        <div className="map-player_wrap">
          <div className={ classNames('map-player_playlist scroll') }>
            <p className="text-l text-margin">Колекція музею</p>
            <ul>
              { data.map(({ name, id, url, lyrics }) => (
                <li
                  key={ id }
                  className={ classNames('map-player_card') }
                >
                  <Link
                    to={ `/player` }
                    className="map-player_card-link"
                    onClick={ handleVideoChange(url, id, lyrics, name) }
                  >
                    <div className="map-player_card-text">
                      <div className={ classNames('play') }></div>
                      <p className="map-player_card-title text-sm">{ name }</p>
                    </div>
                  </Link>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </section>
    )
  );
};
