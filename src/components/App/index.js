// App / index.js
import React from 'react';
import './index.css';
import Header from '../Header'
import List from '../List'
import Note from '../Note'
import { generateId } from '../../utils';

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

  handleEditNote = (type, evt) => {
    // 새 notes 배열 만들기
    const notes = [ ...this.state.notes]
    
    // 새 배열에서 현재 선택한(=activeNote) 노트 찾기
    const note = notes.find((item) => item.id === this.state.activeId);

    // 객체의 속성에 값 할당
    note[type] = evt.target.value;

    // notes에 새 배열을 할당하여 state변경
    this.setState({
      notes,
    });
  }

  handleAddNote = () => {
    const id = generateId(); // 랜덤 ID값 생성

    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '제목',
          contents: '내용',
        },
      ],
      activeId: id,
    });
  }

  handleDeleteNote = () => {
    // 지우려는 노트를 선택한 상태이니, 선택된 노트를 제외하고 새로운 배열을 생성
    const notes = this.state.notes.filter((item) => {
      return item.id !== this.state.activeId;
    });

    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id,
    });
  }


  render() {
    const { notes, activeId } = this.state;

    //  현재 활성화 된 객체를 찾기
    const activeNote = notes.filter((item) => item.id === activeId)[0];

    return(
      <div className="app">
        <Header 
          onAddNote = {this.handleAddNote}
          onDeleteNote = {this.handleDeleteNote}
        />
        <div className="container">
          <List
            notes= {notes}
            activeId = {activeId}
            onListItemClick = {this.handleListItemClick}
          />
          {/* 70번 라인은 notes배열이 0이상이고 사용자가 선택한 특정 노트가 있을 때 수행 */}
          {
            notes.length > 0 && activeNote && 
            <Note
              note = {activeNote} 
              onEditNote = {this.handleEditNote}
            /> 
          }
        </div>
      </div>
    );
  }
}

export default App;