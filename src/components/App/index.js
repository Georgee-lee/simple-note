// App / index.js
import React from 'react';
import './index.css';
import Header from '../Header'
import List from '../List'
import Note from '../Note'

class App extends React.Component {

  state = {
    notes: [
      {
        id: '_qwe23asx',
        title: '첫 번째 글',
        contents: '첫 글의 내용은 이렇다'
      },
      {
        id: '_zxd72eds',
        title: '아 배 아프다',
        contents: '어제 저녁을 잘못 먹었나'
      },
      {
        id: '_jweuc352qs',
        title: '안되겠다',
        contents: '화장실 간다...'
      }
    ],
    activeId: null,
  }

  handleListItemClick = (id) => {
    this.setState({
      activeId: id,
    })
  }

  render() {
    const { notes, activeId } = this.state;

    //  현재 활성화 된 객체를 찾기
    const activeNote = notes.filter((item) => item.id === activeId)[0];

    return(
      <div className="app">
        <Header />
        <div className="container">
          <List
            notes= {notes}
            activeId = {activeId}
            onListItemClick = {this.handleListItemClick}
          />
          {
            notes.length > 0 && activeNote && <Note note = {activeNote} /> 
          }
        </div>
      </div>
    );
  }
}

export default App;