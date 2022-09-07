import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    removeLoader: false,
    favoriteSongs: '',
    check: false,
  };

  async componentDidMount() {
    this.setState({
      removeLoader: true,
      favoriteSongs: await getFavoriteSongs(),
    }, async () => {
      const { trackId } = this.props;
      const { favoriteSongs } = this.state;
      this.setState(
        {
          removeLoader: false,
          check: favoriteSongs.some(({ trackId: track }) => track === trackId),
        },
      );
    });
  }

  favoriteSong = async ({ target }) => {
    const { trackId } = this.props;
    const { checked } = target;
    console.log(trackId);
    this.setState({
      removeLoader: true,
    });
    if (checked) {
      this.setState({ check: true });
      await addSong(trackId);
    } else {
      this.setState({ check: false });
      await removeSong(trackId);
    }
    this.setState({
      removeLoader: false,
    });
  };

  render() {
    const { trackId, previewUrl, trackName } = this.props;
    const { removeLoader, check } = this.state;
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
          <label htmlFor="favorite">
            Favorita
            <input
              type="checkbox"
              name={ trackId }
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ this.favoriteSong }
              checked={ check }
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
};

export default MusicCard;
