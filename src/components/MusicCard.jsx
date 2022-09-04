import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    removeLoader: false,
  };

  favoriteSong = async ({ target }) => {
    const { album } = this.props;
    const { name } = target;
    this.setState({
      removeLoader: true,
    });
    await addSong(album.filter(({ trackId }) => trackId === Number(name)));
    this.setState({
      removeLoader: false,
    });
  };

  render() {
    const { album } = this.props;
    const { removeLoader } = this.state;
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
                name={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
                onClick={ this.favoriteSong }
              />
            </label>
          </div>
        ))}
        { removeLoader && <Loading />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.objectOf.isRequired,
};

export default MusicCard;
