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
    document.title = 'liqr';
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => (
            <li className="errors" key={idx}>{error}</li>
          )
        )}
      </ul>
    );
  }

  handleDemo(event) {
    event.preventDefault();
    const demoUser = {username: 'demo', password: 'password'};
    this.props.login(demoUser)
    .then( () => this.props.history.push('/home'));

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
            <Link to="/" className="logo-box">liqr</Link>
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
            <button className="normal" type="submit">Login</button>
            <button className="normal" onClick={this.handleDemo}>Demo</button>
            <p className="message">Need an Account?</p>
            <a className="message2" href="#/signup" onClick={this.props.clearErrors.bind(this)}>Sign Up</a>
          </form>
        </div>
      </div>
    ) : (
      <div className="background">
        <div className="session-box">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <Link to="/" className="logo-box">liqr</Link>
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
              <button className="normal" type="submit">Sign Up</button>
              <button className="normal" onClick={this.handleDemo}>Demo</button>
            <p className="message">Already registered?</p>
            <a className="message2" href="#/login" onClick={this.props.clearErrors.bind(this)}>Login</a>
          </form>
        </div>
      </div>
    )
  );

  }
}

export default withRouter(SessionForm);
