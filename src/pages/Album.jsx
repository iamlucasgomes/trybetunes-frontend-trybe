import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';

class Album extends Component {
  state = {
    album: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      album: await getMusics(id),
    });
  }

  render() {
    const { album } = this.state;
    console.log(album.at(0));
    return (
      <div>
        <Header />
        <div data-testid="page-album" className="dark:text-white">
          {album
            .filter((_, i) => i === 0)
            .map(({ collectionName, artistName, artworkUrl100 }) => (
              <section key={ artistName }>
                <image src={ artworkUrl100 } alt={ `artwork ${collectionName}` } />
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
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
