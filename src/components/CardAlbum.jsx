import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardAlbum extends Component {
  render() {
    const { thumbnail, collectionId, collection, artist } = this.props;
    return (
      <div key={ collectionId }>
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-full"
          src={ thumbnail }
          alt={ collectionId }
        />
        <h2
          className="text-xl font-semibold
        text-gray-800 dark:text-white "
        >
          {collection}

        </h2>
        <p
          className="text-xl font-semibold
        text-gray-800 dark:text-white "
        >
          {artist}

        </p>
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
