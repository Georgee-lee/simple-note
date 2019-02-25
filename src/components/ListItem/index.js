// Listitem / index.js
import React from 'react';
import './index.css';

class Listitem extends React.Component {
  render() {
    const { id, active, title, contents, onClick } = this.props;

    return(
      <div
        className = {active ? "list-item active" : "list-item"}
        onClick = {onClick} //onClick 이벤트 발생하면 App.js 에서 만든 handleItemClick 호출!  
      >
        <div className = "title">{title ? title : '제목'}</div>
        <div className = "list-item-contents">{contents ? contents : '내용'}</div>
      </div>
    );
  }
}

export default Listitem