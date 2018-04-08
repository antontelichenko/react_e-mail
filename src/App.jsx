import React from 'react';
import { Link } from 'react-router';

var createReactClass = require('create-react-class');

const App = createReactClass ({
  render: function() {
    return (
        <div className='App'>
            <div className='menu-bar'>
                <div className='menu-item'>
                    <Link to='/about'>About</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/inbox'>Inbox</Link>
                </div>
            </div>
          <div className='content'>
              {this.props.children}
          </div>
        </div>
    );
  }
});

export default App;
