import React, { Component, PropTypes } from 'react';

export default class ExpandedNote extends Component {
  render() {
    return (
    <div>
    <ul>
      <li>{this.props.comment.text}</li>
    </ul>
    <h1>test</h1>
    </div>
      );
  }
}


ExpandedNote.propTypes = {
  note: PropTypes.object.isRequired,
}
