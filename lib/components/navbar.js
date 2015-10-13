import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <ul className='list-inline navbar-text navbar-left'>
            <li>itmes</li>
            <li>itmes2</li>
            <li>itmes3</li>
          </ul>
          <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">SDegges</a></p>
        </nav>
      </div>
    )
  }
})
