import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setUpdated(message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
         />
        <h2>Username Searched: {updated}</h2>
      </header>
    </div>
  );
}

export default App;
