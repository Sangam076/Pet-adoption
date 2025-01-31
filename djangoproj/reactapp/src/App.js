
import './App.css';

const App = () => {
  const name = 'Sangam'
  const isName = false


  return (
    <div className="App">
        <h1>Hello {isName ? name : 'Guest'}</h1>
    </div>
  );
}

export default App;
