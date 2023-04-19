import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

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
    return (
      <div data-testid="page-album">
        {album
          .filter((_, i) => i === 0)
          .map(({ collectionName, artistName }) => (
            <section key={ artistName }>
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
