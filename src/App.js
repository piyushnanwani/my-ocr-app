import React, { Component } from 'react';
import './App.css';

var Tesseract = window.Tesseract;

class App extends Component {

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
            <input type="file" id="fileUploader" multiple />
          </label>

          <div>
            { /* Previews will be shown here */ }
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