var React = require("react");

var Login = React.createClass({


	render: function() {
		return (
			<div className="container">
				<form id="signup" name="signup">
                <div className="row">
                    <h2>Login</h2>
                    <h2 id="invalidLogin"></h2>
                  
                </div>

                <div className="row">
                  <label>Email Address </label>
                  <input className="text" name="email" type="email"/>
                </div>
                <div className="row">
                    <label>Password </label>
                    <input name="password" type="password" className="text"/>
                </div>
               
  
                <div className="row">
                  <input id="loginButton" className="btn" type="submit" value="Login"/>
                </div>
              </form>
			</div>
		);
	}
});

module.exports = Login;