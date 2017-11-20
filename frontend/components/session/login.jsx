import React from 'react';

class logIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/chirps'));//this will "redirect" the user to a dashboard after login
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
          />
          </label>

          <label>Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
          />
          </label>

          <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default logIn;
