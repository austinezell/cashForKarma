import React from "react";

var navBar = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-inverse">
        <p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">SDegges</a></p>

      </nav>
    );
  }
});
