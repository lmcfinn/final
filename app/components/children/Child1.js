// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Child1 = React.createClass({
  render: function() {
    return (
      <div className="container">
     {/* This code will allow us to automatically dump the correct GrandChild component */}
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

module.exports = Child1;

            