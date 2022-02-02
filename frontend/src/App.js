import React from 'react'
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import AppRouter from './routes/AppRouter';
import {Footer} from './components/Footer';

function App() {
  const store = generateStore()
  return (
    <Provider store = {store}>
      <AppRouter/>
      <Footer />
    </Provider>
  );
}

export default App; 