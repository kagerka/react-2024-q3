import { PureComponent } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

interface Counter {
  count: number;
}
class App extends PureComponent {
  constructor(props: Counter) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state as Counter;
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            type="submit"
            onClick={() => this.setState(() => ({ count: count + 1 }))}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
