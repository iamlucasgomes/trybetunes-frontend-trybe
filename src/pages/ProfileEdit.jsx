import React, { Component } from 'react';
import FormUser from '../components/FormUser';

class ProfileEdit
  extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <FormUser />
      </div>
    );
  }
}

export default ProfileEdit;
