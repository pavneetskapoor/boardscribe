import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../api/notes.js';

import Note from './Note.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
  renderNotes() {
    return this.props.notes.map((note) => (
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

App.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    notes: Notes.find({}).fetch(),
  };
}, App);
