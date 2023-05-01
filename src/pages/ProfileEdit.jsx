import React, { Component } from 'react';
import FormUser from '../components/FormUser';
import Loading from '../components/Loading';
import Header from '../components/Header';

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
        <Header />
        {isLoading && <Loading />}
        <FormUser />
      </div>
    );
  }
}

export default ProfileEdit;
