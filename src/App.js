import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path='/' exact element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
