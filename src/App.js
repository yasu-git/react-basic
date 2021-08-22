
import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import B from './components/B';
import BasicReducer from './components/BasicReducer';
import CompB from './components/CompB';
import React, { useReducer } from 'react';
import Memo from './components/Memo';

const initialState = 0

const reducer = (currentState, action) => {
  switch (action) {
    case 'add_1':
      return currentState + 1
      break
    case 'multiple_3':
      return currentState * 3
      break
    case 'reset':
      return initialState
      break
    default:
      return currentState
      break
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const AddCount1 = () => {
    setCount1(prevCount1 => prevCount1 + 1)
  }

  const AddCount2 = () => {
    setCount2(prevCount2 => prevCount2 + 1)
  }

  return (
    //
    <AppContext.Provider value={{ countProvided: count, dispatchProvided: dispatch }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}

          {/* <ApiFetch />
          <B /> */}
          {/* <BasicReducer /> */}
          {/* Count {count}
          <CompB /> */}

          <Memo />

        </header>
      </div>
    </AppContext.Provider>

  );
}

export default App;
