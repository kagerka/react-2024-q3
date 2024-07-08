import { PureComponent } from 'react';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Content from './views/Content/Content';
import Header from './views/Header/Header';

class App extends PureComponent {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <Content />
      </ErrorBoundary>
    );
  }
}

export default App;
