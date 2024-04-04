
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
      <div className="App">
          <h2>welcome to react</h2>
          <Counter/>
          <Todolist/>
      </div>
  );
}

export default App;
