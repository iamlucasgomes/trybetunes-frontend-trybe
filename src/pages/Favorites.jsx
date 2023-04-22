import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

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

  async componentDidUpdate(prevState) {
    const { favorites } = this.state;
    if (prevState.favorites !== favorites) {
      this.setState({ favorites: await getFavoriteSongs() });
    }
  }

  render() {
    const { favorites, removeLoader } = this.state;
    return (
      <div>
        <Header />

        <div data-testid="page-favorites">
          { removeLoader && <Loading />}
          {favorites
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
}

export default Favorites;
