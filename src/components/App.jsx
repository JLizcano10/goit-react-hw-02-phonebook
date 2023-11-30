import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: '30px',
          color: '#010101',
        }}
      >
        <h1>Hola {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
