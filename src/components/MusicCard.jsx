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
      const { song } = this.props;
      const { trackId } = song;
      const { favoriteSongs } = this.state;
      this.setState(
        {
          removeLoader: false,
          checked: favoriteSongs.some(({ trackId: track }) => track === trackId),
        },
      );
    });
  }

  favoriteSong = async ({ target }) => {
    const { song } = this.props;
    const { checked } = target;
    const miles = 1000;
    this.setState({
      removeLoader: true,
    });
    if (checked) {
      this.setState({ checked: true });
      await addSong(song);
    } else {
      this.setState({ checked: false });
      await removeSong(song);
    }

    setTimeout(() => {
      this.setState({
        removeLoader: false,
      });
    }, miles);
  };

  render() {
    const { trackId, previewUrl, trackName } = this.props;
    const { removeLoader, checked } = this.state;
    return (
      <div>
        <div key={ trackId }>
          <p key={ trackName }>{trackName}</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
          <label htmlFor="Favorita">
            Favorita
            <input
              type="checkbox"
              id="Favorita"
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
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  song: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
