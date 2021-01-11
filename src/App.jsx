import React from 'react';
import {Search} from './components/Search';
import {Grilla} from "./components/Grilla";
import {Footer} from "./components/Footer";
import {Provider} from 'react-redux';
import generarStore from './redux/store';

function App() {
  return (
    <div className = "container">      
      <Provider store = {generarStore()}> 
        <Search/>
        <Grilla/>
        <Footer/>
      </Provider>      
    </div>
    
  );
}
export default App;
