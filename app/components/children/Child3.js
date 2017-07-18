// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Child3 = React.createClass({
  render: function() {
    return (
      <div className="container">
    
        <p>I AM PROFILE</p>


      </div>
    );
  }
});

module.exports = Child3;

            