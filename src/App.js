import logo from './logo.svg';
import './App.css';

function App() {
return (
<div style={{ textAlign: 'center', marginTop: '100px' }}>
<h1>🚀 My First React App</h1>
<p>Deployed on Azure VM</p>
<button onClick={() => alert('Hello from React!')}>
Click Me
</button>
</div>
);
}


export default App;
