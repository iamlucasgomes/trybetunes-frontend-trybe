import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';

function Album(props) {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      const { match: { params: { id } } } = props;
      const albumData = await getMusics(id);
      setAlbum(albumData);
    };
    fetchAlbum();
  }, [props]);

  return (
    <div>
      <Header />
      <div data-testid="page-album" className="dark:text-white">
        {album
          .filter((_, i) => i === 0)
          .map(({ collectionName, artistName, artworkUrl100 }) => (
            <section key={ artistName }>
              <img src={ artworkUrl100 } alt={ `artwork ${collectionName}` } />
              <h1 data-testid="album-name">{collectionName}</h1>
              <h3 data-testid="artist-name">{artistName}</h3>
            </section>
          ))}
        {album
          .filter((_, i) => i !== 0)
          .map((song) => (<MusicCard
            key={ song.trackId }
            trackId={ song.trackId }
            trackName={ song.trackName }
            previewUrl={ song.previewUrl }
            song={ song }
          />))}
      </div>
    </div>
  );
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
