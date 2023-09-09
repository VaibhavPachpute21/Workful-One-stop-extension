import React from "react";
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import Greet from "./Components/Greet/Greet";
import Time from './Components/Time/Time'
import Todo from './Components/Todo/Todo'
import { Provider } from 'react-redux';
import store from './store';
import Weather from "./Components/Weather/Weather";
import Reminder from "./Components/Reminder";

function Popup() {
  return (
    <div>
      <Greet />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Time />
          <Weather />
        </div>
        <Todo />
      </div>
      {/* <Reminder/> */}


    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-target'));
root.render(
  <Provider store={store}>
    <Popup />
  </Provider>
);

// render(<Popup/>,document.getElementById("react-target"))