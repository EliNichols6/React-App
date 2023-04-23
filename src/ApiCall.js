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
      resourceId: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.translateText();
  };

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
  };

  getResource = () => {
    const { resourceId } = this.state;
    fetch(`/resource/${resourceId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resource fetched:', data);
        alert('Resource fetched');

      });
  };

  createResource = () => {
    fetch('/resource', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      }),
    }).then(() => {
      console.log('Resource created');
      alert('Resource created');

    });
  };

  updateResource = () => {
    const { resourceId } = this.state;
    fetch(`/resource/${resourceId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      }),
    }).then(() => {
      console.log('Resource updated');
      alert('Resource updated');
    });
  };

  deleteResource = () => {
    const { resourceId } = this.state;
    fetch(`/resource/${resourceId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Resource deleted');
      alert('Resource deleted');
    });
  };

  render() {
    const { inputText, outputText, language, resourceId } = this.state;
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

        <h2>RESTful API</h2>
        <input
          type="text"
          name="resourceId"
          value={resourceId}
          onChange={this.handleInputChange}
          placeholder="Resource ID"
        />
        <button onClick={this.getResource}>Get Resource</button>
        <button onClick={this.createResource}>Create Resource</button>
        <button onClick={this.updateResource}>Update Resource</button>
        <button onClick={this.deleteResource}>Delete Resource</button>
      </div>
    );
  }
  componentDidMount() {
    const resourceId = 1; 
    fetch(`/resource/${resourceId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}

export default App;
