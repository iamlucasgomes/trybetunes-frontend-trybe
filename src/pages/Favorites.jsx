import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Favorites extends Component {
  state = {
    removeLoader: false,
    favorites: [],
  };

  async componentDidMount() {
    this.setState({
      removeLoader: true,
      favorites: await getFavoriteSongs(),
    }, () => {
      this.setState({
        removeLoader: false,
      });
    });
  }

  render() {
    const { favorites, removeLoader } = this.state;
    return (
      <div data-testid="page-favorites">
        { removeLoader && <Loading />}
        {favorites
          .map(({ trackId, previewUrl, trackName }) => (<MusicCard
            key={ trackId }
            trackId={ trackId }
            previewUrl={ previewUrl }
            trackName={ trackName }
          />))}
      </div>
    );
  }
}

export default Favorites;
