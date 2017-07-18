// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// import Results from "./Search/Results"

// Create the Main component
var Main = React.createClass({

    render: function () {

        // var needSearched = $('#needSearched').val()
        // console.log(needSearched)

        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="text-center"><strong>Bartering is BACK!</strong></h2>
                    <h3 className="text-center">Money holds no sway</h3>
                </div>
                <div className="row">

                   {this.props.children}

                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
                </div>
                
            </div>
        )
    }
});

// Export the module back to the route
module.exports = Main;
