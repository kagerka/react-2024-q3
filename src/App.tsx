import { PureComponent } from 'react';

import Content from './views/Content/Content';
import Header from './views/Header/Header';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
