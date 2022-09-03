import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    album: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      album: await getMusics(id),
    });
  }

  render() {
    const { album } = this.state;
    return (
      <div data-testid="page-album">
        <MusicCard
          album={ album }
        />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Album;
