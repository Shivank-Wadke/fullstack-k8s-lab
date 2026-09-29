import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [data, setData] = useState('Waiting for backend response...');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => setData('Backend not yet reachable: ' + err.message));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>AKS Fullstack Lab App</h1>
      <p style={{ fontSize: '1.2rem', color: '#2c3e50' }}>{data}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
