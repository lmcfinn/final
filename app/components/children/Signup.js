var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

var Signup = React.createClass({
	


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
                  <input id="signupButton" className="btn" type="submit" value="Sign Up"/>
                </div>
              </form>
			</div>

		);
	}
});

module.exports = Signup;