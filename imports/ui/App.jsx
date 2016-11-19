import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../api/notes.js';
import { Comments } from '../api/notes.js';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

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

  renderImageUpload() {
    return <form onSubmit = {this.handleSubmitImage.bind(this)}>
     <input type="file" id="userimage" name="userimage"/>
     <button type="submit">Upload</button>
    </form>
  }

  renderCommentForm() {
    return <form onSubmit = {this.handleSubmitForm.bind(this)}>
    <input type="text" ref="textInput" placeholder="Type to add new tasks" />
    </form>
  }

  handleSubmitImage(event){
    event.preventDefault
    var file = $('#userimage')[0].files[0];
    console.log(file)
    Cloudinary._upload_file(file, function(err, res) {
      if (err){
        console.log(err);
        return;
        }
        console.log(res);
    });
  }

  handleSubmitForm(event){
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    comments.insert({
      text,
      createdAt: new Date(), // current time
      });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';

  }

  render() {
    if (Meteor.userId()) {
      return (
      <ul>
        {this.renderNotes()}
        {this.renderComments()}
        {this.renderImageUpload()}
        {this.renderCommentForm()}
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
