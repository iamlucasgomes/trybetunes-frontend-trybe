import React from 'react';
import PropTypes from 'prop-types';

export default class ProfilePic extends React.Component {
  render() {
    const { imageUrl, altText } = this.props;
    return (
      <img data-testid="profile-image" src={ imageUrl || '' } alt={ altText || '' } />
    );
  }
}

ProfilePic.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
}.required;
