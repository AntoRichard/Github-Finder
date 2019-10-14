import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      login,
      avatar_url,
      html_url,
      gists_url,
      name,
      blog,
      company,
      location,
      hireable,
      bio,
      followers,
      following
    } = this.props.user;
    const { loading } = this.props;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;
