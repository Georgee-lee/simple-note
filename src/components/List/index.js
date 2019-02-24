// List /index.js
import React from 'react';
import './index.css';
import Listitem from '../ListItem'

class List extends React.Component {
  render() {
    return(
      <div className="list">
        <Listitem />
      </div>
    );
  }
}

export default List