import './App.css';
import UseReducer from './Hooks/UseReducer';
import UseState from './Hooks/UseState';

function App() {
  return (
    <div className="App">
      <h2>Create React App to Vite migration</h2>
      <UseState/>
      <hr/>
      <UseReducer />
    </div>
  );
}

export default App;
