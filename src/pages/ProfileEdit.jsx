import React, { Component } from 'react';
import FormUser from '../components/FormUser';
import Loading from '../components/Loading';

class ProfileEdit
  extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-profile-edit">
        {isLoading && <Loading />}
        <FormUser />
      </div>
    );
  }
}

export default ProfileEdit;
