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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field){
    return (event) => this.setState({
      [field]: event.currentTarget.value
    });
  }

  componentWillMount(){
    document.title = 'liqr - login';
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

  handleDemo(event) {
    const Username = 'demo'.split('');
    const Password = 'password'.split('');
    const demoUser = {username: 'demo', password: 'password'};
    this.props.action(demoUser)
      .then( () => this.props.history.push('/home'));

    // if (Username.length > 0) {
    //   this.setState({ username: this.state.username + Username.shift() }).bind(this);
    // } else if (Password.length > 0) {
    //   this.setState({ password: this.state.password + Password.shift() }).bind(this);
    // } else {
    //   this.handleSubmit();
    // }
  }

  handleSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user)
      .then( () => this.props.history.push('/home'));
  }

  render(){
    return ( (this.props.formType === 'login') ? (
      <div className="background">
        <div className="session-box">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <p className="logo-box" href="#/home">liqr</p>
            <p className="top_message">Welcome Back!</p>
            {this.renderErrors()}
            <br />
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
            <input onClick={this.handleDemo} className="normal" type="submit" value="Demo" />
            <p className="message">Need an Account?</p>
            <a href="#/signup" onClick={this.props.clearErrors.bind(this)}>Sign Up</a>
          </form>
        </div>
      </div>
    ) : (
      <div className="background">
        <div className="session-box">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <p className="logo-box" href="#/home">liqr</p>
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
      </div>
    )
  );

  }
}

export default withRouter(SessionForm);
