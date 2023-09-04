/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('<App />', () => {
  it('renders without errors', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
