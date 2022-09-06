import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    removeLoader: false,
    favoriteSongs: '',
    checked: false,
  };

  async componentDidMount() {
    this.setState({
      removeLoader: true,
      favoriteSongs: await getFavoriteSongs(),
    }, () => {
      const { album } = this.props;
      const { favoriteSongs } = this.state;
      this.setState({
        removeLoader: false,
      }, () => this.setState({
        checked: favoriteSongs.some(({ trackId }) => trackId === album.trackId),
      }));
    });
  }

  favoriteSong = async ({ target }) => {
    const { album } = this.props;
    const { name, checked } = target;
    this.setState({
      removeLoader: true,
    });
    if (checked) {
      this.setState({ checked: true });
      await addSong(album.find(({ trackId }) => trackId === Number(name)));
    } else {
      this.setState({ checked: false });
      await removeSong(album.find(({ trackId }) => trackId === Number(name)));
    }
    this.setState({
      removeLoader: false,
    });
  };

  render() {
    const { trackId, previewUrl } = this.props;
    const { removeLoader, checked } = this.state;
    return (
      <div>
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
              onChange={ this.favoriteSong }
              checked={ checked }
            />
          </label>
        </div>
        { removeLoader && <Loading />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.objectOf.isRequired,
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;
