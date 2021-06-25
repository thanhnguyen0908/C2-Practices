/*
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
*/

import React from 'react';
import {Provider} from 'react-redux';

import CounterApp from './screen/CounterApp';
import {store} from './store/store';

export default function App () {
  return(
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  );
}