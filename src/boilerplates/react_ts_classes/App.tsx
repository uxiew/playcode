import React, {Component} from 'react';
import Hello from './Hello'

interface AppProps {}
interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {
  state = {
    name: 'React TypeScript Classes'
  }

  render() {
    return (
      <div className="App">
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

// Log to console
console.log('Hello console');