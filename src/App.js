import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/index';
import Home from './pages/Home';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <Home/> 
        </header>
      </div>
    </Provider>
  );
}

export default App;
