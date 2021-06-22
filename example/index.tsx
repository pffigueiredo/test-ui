import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, styled } from '../dist/index';

const NewButton = styled(Button, {
  backgroundColor: 'black',
  position: 'absolute',
  left: '200px',
  color: 'white',
});

const App = () => {
  return (
    <div>
      <NewButton>Test Button</NewButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
