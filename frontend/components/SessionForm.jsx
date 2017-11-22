import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    // this.renderErrors();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (event) => this.setState({
      [field]: event.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.loggedIn){
      this.props.history.push("/home");
    }
  }

  componentWillMount(){
    document.title = 'liqr - login';
  }

  renderErrors() {
    console.log(this.props.errors);
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
    this.props.action(user);
    // this.props.clearErrors();
  }

  render(){
    return ( (this.props.formType === 'login') ? (
      <div className="session-box">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <p className="top_message">Welcome Back!</p>
          {this.renderErrors()}
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>

          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
            <input className="normal" type="submit" value="Login" />
            <p className="message">Need an Account?</p>
            <a href="#/signup" onClick={this.props.clearErrors.bind(this)}>Sign Up</a>
      </form>
      </div>
    ) : (
      <div className="session-box">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <p className="top_message">Hello!</p>
          {this.renderErrors()}
          <br/>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <br />
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')} />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <br />
            <input className="normal" type="submit" value="Sign Up!" />
           <p className="message">Already registered?</p>
           <a href="#/login" onClick={this.props.clearErrors.bind(this)}>Login</a>
        </form>
      </div>
    )
  );

  }
}

export default withRouter(SessionForm);
