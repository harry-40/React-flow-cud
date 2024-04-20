import Home from './Components/Home';
import './App.css';
import { Provider } from 'react-redux';
import store  from './redux/store'


function App() {
 <Provider store={store}>
  <div className='app-container'>
    <h1>Graph Operation</h1>
    <Home/>

  </div>

 </Provider>
}

export default App;
