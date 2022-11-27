import React from 'react';
import { observer } from "mobx-react"
import Counter from './counterStore'

const counter = new Counter()

export const App = observer(() => (
  <div className='App'>
    <h1>Hello React.</h1>
    <h2>Start editing to see some magic happen!</h2>
    
    <button onClick={() => counter.increment()}>
      Increment  {counter.value}
    </button>
  </div>
));

// Log to console
console.log('Hello console')