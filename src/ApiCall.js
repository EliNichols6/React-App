import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      outputText: '',
      language: 'es',
      apiKey: 'AIzaSyA6APQUuxeJUC_nkhOslI0HKZRjINMHrxU',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.translateText();
  }

  translateText = () => {
    const { inputText, language, apiKey } = this.state;

    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: inputText,
        target: language,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.translations && data.data.translations[0]) {
          this.setState({ outputText: data.data.translations[0].translatedText });
        } else {
          console.error('Error: Unable to translate text');
        }
      })
      .catch((error) => console.error('Error:', error));
  }

  render() {
    const { inputText, outputText, language } = this.state;
    return (
      <div className="App">
        <h1>Google Translate API</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="inputText"
            value={inputText}
            onChange={this.handleInputChange}
            placeholder="Enter text to translate"
          />
          <select name="language" value={language} onChange={this.handleInputChange}>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
          <button type="submit">Translate</button>
        </form>
        <textarea readOnly value={outputText} placeholder="Translated text" />
      </div>
    );
  }
}

export default App;
