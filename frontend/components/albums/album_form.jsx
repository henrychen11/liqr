import React from 'react';

class AlbumForm extends React.Component {

  render(){
    return (
      <div>
        <h1>This is alubme create</h1>
        <form>
          <label>Title
            <input type="text"></input>
          </label>

          <label>Description
            <input type="text"></input>
          </label>

          <input type="submit" value="Create New Album"></input>
        </form>
      </div>

    );
  }
}

export default AlbumForm;
