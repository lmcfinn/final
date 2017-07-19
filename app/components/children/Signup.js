var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

var Signup = React.createClass({
	
  getInitialState: function () {
    return {
        email: "",
        password: ""
    };
  },

  setSignUp: function(email, password) {

    console.log("setSignup email", email)
    console.log("setSignup password", password)

    helpers.signUp(email, password).then(function(data) {
      console.log("getSignUp data", data)
      this.setState({
        email: data.email,
        password: data.password
      });
    }.bind(this));
  },

  // setEmail: function(email) {
  //   this.setState({ email: email });
  // },

  // setPassword: function(password) {
  //   this.props.setState({password: password});
  // },
  
  handleChange(data) {
    console.log("handleChangeEmail", data.target.value)
    this.setState({email: data.target.value});
  },

  // handleChange(password) {
  //   console.log("handleChangePassword", password.target.value)
  //   this.setState({password: password.target.value});
  // },



  // handleClick: function (event) {
  //       event.preventDefault();
  //       console.log("CLICKED");
  //       // this.props.updateSearch(this.state.search);
  //       this.setSignUp();
  // },

  handleSubmit: function (event) {
        event.preventDefault();
        console.log("Submitted");
        
        // var email = {this.state.value}
        // console.log("handleSubmit", email)

        // this.props.updateSearch(this.state.search);
        this.setSignUp();
  },

	render: function() {
		return (

			<div className="container">
				<form id="signup" name="signup" onSubmit={this.handleSubmit} >
                <div className="row">
                    <h2>Sign Up</h2>
                    <h2 id="invalidSignup"></h2>
                    <h6>* Require Entries</h6>
                </div>
                <div className="row">
                  <label>Email Address *</label>
                  <input className="text" name="email" type="email" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="row">
                    <label>Password *</label>
                    <input name="password" type="password" className="text" />
                </div>
                <div className="row">
                  <button id="signupButton" className="btn" type="submit" >Submit</button>
                </div>
              </form>
              {this.props.children}
			</div>

		);
	}
});

module.exports = Signup;