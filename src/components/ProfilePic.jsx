import React from 'react';
import PropTypes from 'prop-types';

export default class ProfilePic extends React.Component {
  state = {
    imageUrl: 'https://via.placeholder.com/350x150',
    altText: 'Imagem padrão',
  };

  componentDidMount() {
    const { photoSrc, altText } = this.props;
    if (photoSrc && altText) {
      this.setState({
        imageUrl: photoSrc,
        altText,
      });
    }
  }

  render() {
    const { altText, imageUrl } = this.state;
    return (
      <img src={ imageUrl } alt={ altText } />
    );
  }
}

ProfilePic.propTypes = {
  photoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
