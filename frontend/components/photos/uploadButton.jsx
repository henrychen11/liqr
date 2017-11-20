import React from 'react';

class uploadButton extends React.Component {

  upload(event) {
    event.preventDefault();
  }

  render () {
    return (
      <button onClick={this.upload}> Upload Photo!</button>
    )
  }
}

export default uploadButton;
