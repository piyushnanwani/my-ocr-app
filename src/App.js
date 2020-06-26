import React, { Component } from 'react';
import './App.css';

var Tesseract = window.Tesseract;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uploads: [], 
      patterns: [], 
      documents: []
    };
  }

  handleChange = ( event ) => {
    if (event.target.files[0] ) {
      var uploads = []
      for (var key in event.target.files) {
        if(!event.target.files.hasOwnProperty(key)) continue;
        let upload = event.target.files[key]
        uploads.push(URL.createObjectURL(upload))
      }
      this.setState({
        uploads: uploads
      })
    } else {
      this.setState({
        uploads: []
      })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>My OCR App</h1>
        </header>

        { /* File uploader */ }
        <section className="hero">
          <label className="fileUploaderContainer">
            Click here to upload documents
            <input type="file" id="fileUploader" onChange={this.handleChange} multiple />
          </label>

          <div>
            { this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" />
            }) }
          </div>

          <button className="button">Generate</button>
        </section>

        { /* Results */ }
        <section className="results">

          <div className="results__result">
            <div className="results__result__image">
              <img width="250px" />
            </div>
            <div className="results__result__info">
              <div className="results__result__info__codes">
                <small>{ /* Confidence score */ }</small>
              </div>
              <div className="results__result__info__codes">
                <small>{ /* Pattern output */ }</small>
              </div>
              <div className="results__result__info__text">
                <small>{ /* Full output */ }</small>
              </div>
            </div>
            <hr />
          </div>

          <div className="results__result">
            { /* Additional output if more than one document is processed */ }
          </div>

        </section>
      </div>
    )
  }

}

export default App;