import React, { Component, PropTypes } from 'react';

export default class Note extends Component {
  render() {
    return (
    <li>{this.props.note.text}</li>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
}
