import React from 'react';

class AlbumForm extends React.Component {

  render(){
    return (
      <div className="album-form-container">
        <div className="album-form">

          <h1 className="album-form-header">Create a New Album</h1>

            <form>
              <label>Title
                <br />
                <input className="album-input"type="text"></input>
              </label>
              <br/>
              <label>Description
                <br />
                <input type="text"></input>
              </label>
              <br/>
              <button type="submit" value="Create New Album"></button>

            </form>
  



        </div>
      </div>

    );
  }
}

export default AlbumForm;
