// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Skill Exchange</strong></h2>
          <p><em></em></p>
          <hr />
          <p>
            <Link to="/Child1"><button className="btn btn-primary btn-lg">Sign Up</button></Link>
            <Link to="/Child2"><button className="btn btn-danger btn-lg">Login</button></Link>
            <Link to="/Child3"><button className="btn btn-success btn-lg">Profile</button></Link>
          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
