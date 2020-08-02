import React,{Fragment} from 'react';
import './App.css';
//components
import Inputtodo from './components/Inputtodo';
import Listtodo from './components/Listtodo';

//
function App() {
  return (
    <Fragment>
      <div class="container">
        <Inputtodo/>
        <Listtodo/>
      </div>
    </Fragment>
  );
}

export default App;
