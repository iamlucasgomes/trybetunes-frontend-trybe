import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardAlbum extends Component {
  render() {
    const { thumbnail, collectionId, collection, artist } = this.props;
    return (
      <div key={ collectionId }>
        <img src={ thumbnail } alt={ collectionId } />
        <h2>{collection}</h2>
        <p>{artist}</p>
      </div>
    );
  }
}

CardAlbum.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collection: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,

};

export default CardAlbum;
