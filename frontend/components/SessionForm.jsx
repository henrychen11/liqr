import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (event) => this.setState({
      [field]: event.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.loggedIn){
      this.props.history.push("/");
    }
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          )
        )}
      </ul>
    );
  }

  handleSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render(){
    const display = (this.props.formType === 'login') ? (
      <div>
        <h3>Login</h3>
        <Link to="login"></Link>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password:
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    ) : (
      <div>
        <h3>Signup</h3>
        <Link to="signup"></Link>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password:
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default withRouter(SessionForm);
