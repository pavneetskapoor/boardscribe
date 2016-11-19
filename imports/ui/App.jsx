import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../api/notes.js';
import { Comments } from '../api/notes.js';
import { Meteor } from 'meteor/meteor';

import Note from './Note.jsx';
import ExpandedNote from './ExpandedNote.jsx'
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
  renderNotes() {
    return this.props.notes.map((note) => (
      <Note key={note._id} note={note} />
    ));
  }

  renderComments() {
    return this.props.comments.map((comment) => (
      <ExpandedNote key={comment._id} comment={comment} />
    ));
  }

  renderLogin() {
    return <AccountsUIWrapper />
  }

  render() {
    if (Meteor.userId()) {
      return (
      <ul>
        {this.renderNotes()}
        {this.renderComments()}
      </ul>
      )
    } else {
      return (<ul>{this.renderLogin()}</ul>)
    };
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    notes: Notes.find({}).fetch(),
    comments: Comments.find({}).fetch(),
  };
}, App);
