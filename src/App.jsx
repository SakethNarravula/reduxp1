import { Provider } from 'react-redux';
import './App.css';
// import Countries from './features/Countries';
import { store } from './app/store';
import Products from './features/Products';

function App() {
  return (
     <Provider store={store}>
       <div className="App">
          <h2>welcome to react</h2>
          {/* <Countries></Countries> */}
          <Products/>
        </div>
     </Provider>
  );
}

export default App;
