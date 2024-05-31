import './App.css';
import AppRdux from './components/AppRdux';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './Config/Reducer';

const store = legacy_createStore(reducer)

function App() {
  return (
    <Provider store={store}>
     <AppRdux />
    </Provider>
  );
}

export default App;
