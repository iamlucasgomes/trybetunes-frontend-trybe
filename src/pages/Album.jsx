import PropTypes from 'prop-types';
import React, { Component } from 'react';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    album: [],
    artist: '',
    collection: '',
    musics: [],
    preview: [],
    trackId: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      album: await getMusics(id),
    }, () => {
      const { album } = this.state;
      this.setState({
        artist: album.find((_, i) => i === 0).artistName,
        collection: album.find((_, i) => i === 0).collectionName,
        musics: album.filter((_, i) => i !== 0).map(({ trackName }) => trackName),
        preview: album.filter((_, i) => i !== 0).map(({ previewUrl }) => previewUrl),
        trackId: album.filter((_, i) => i !== 0).map(({ trackId }) => trackId),
      });
    });
  }

  render() {
    const { artist, collection, musics, preview, trackId } = this.state;
    return (
      <div data-testid="page-album">
        <h1 data-testid="album-name">{collection}</h1>
        <h3 data-testid="artist-name">{artist}</h3>
        {musics.map((_, i) => <p key={ musics[i] }>{musics[i]}</p>)}
        {preview.map(() => (
          <audio key={ trackId } data-testid="audio-component" src={ preview } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            {' '}
            <code>audio</code>
            .
          </audio>
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Album;
