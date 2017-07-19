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
    helpers.signUp().then(function(data) {
      console.log("getSignUp data", data)
      this.setState({
        email: data.email,
        password: data.password
      });
    }.bind(this));
  },



  handleClick: function (event) {
        event.preventDefault();
        console.log("CLICKED");
        // this.props.updateSearch(this.state.search);
        var tenK = this.setSignUp();
  },

	render: function() {
		return (

			<div className="container">
				<form id="signup" name="signup">
                <div className="row">
                    <h2>Sign Up</h2>
                    <h2 id="invalidSignup"></h2>
                    <h6>* Require Entries</h6>
                </div>
                <div className="row">
                  <label>Email Address *</label>
                  <input className="text" name="email" type="email"/>
                </div>
                <div className="row">
                    <label>Password *</label>
                    <input name="password" type="password" className="text"/>
                </div>
                <div className="row">
                  <button id="signupButton" className="btn" onClick={this.handleClick} >Submit</button>
                </div>
              </form>
              {this.props.children}
			</div>

		);
	}
});

module.exports = Signup;