import React, { Component } from 'react';

import Note from './Note.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {
  getNotes() {
    return [
      { _id: 1, text: 'First Note' },
      { _id: 2, text: 'Second Note' }
    ];
  }

  renderNotes() {
    return this.getNotes().map((note) => (
      <Note key={note._id} note={note} />
    ));
  }

  renderLogin() {
    return <AccountsUIWrapper />
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderLogin()}
          {this.renderNotes()}
        </ul>
      </div>
    );
  }
}
