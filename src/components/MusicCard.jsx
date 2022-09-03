import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  render() {
    const { album } = this.props;
    return (
      <div>
        {album
          .filter((_, i) => i === 0)
          .map(({ collectionName, artistName }) => (
            <section key={ artistName }>
              <h1 data-testid="album-name">{collectionName}</h1>
              <h3 data-testid="artist-name">{artistName}</h3>
            </section>
          ))}
        {album
          .filter((_, i) => i > 0)
          .map(({ trackName }) => <p key={ trackName }>{trackName}</p>)}
        {album.filter((_, i) => i > 0).map(({ trackId, previewUrl }) => (
          <div key={ trackId }>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor="favorite">
              Favorita
              <input
                type="checkbox"
                name="favorite"
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.objectOf.isRequired,
};

export default MusicCard;
