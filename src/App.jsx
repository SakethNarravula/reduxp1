import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/features/Counter';
import Todolist from './components/features/Todolist';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <h2>welcome to react redux</h2>
          <Counter/>&nbsp;&nbsp;&nbsp;
          <Todolist/>
      </div>
    </Provider>
  );
}

export default App;
