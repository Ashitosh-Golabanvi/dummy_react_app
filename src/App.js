import React from 'react';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 React App Deployed on Azure VM</h1>

      <p style={styles.text}>
        Your React application is successfully running behind Nginx on:
      </p>

      <div style={styles.box}>
        <code>http://YOUR-VM-IP/react/</code>
      </div>

      <p style={styles.status}>
        ✅ Live Update Test Successful
      </p>

      <small style={styles.footer}>
        Last Updated: {new Date().toLocaleString()}
      </small>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh'
  },
  title: {
    color: '#1a73e8',
    marginBottom: '20px'
  },
  text: {
    fontSize: '18px'
  },
  box: {
    background: '#000',
    color: '#0f0',
    padding: '10px',
    display: 'inline-block',
    margin: '20px 0',
    borderRadius: '5px'
  },
  status: {
    fontSize: '20px',
    color: 'green',
    fontWeight: 'bold'
  },
  footer: {
    marginTop: '40px',
    display: 'block',
    color: '#555'
  }
};

export default App;
