import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Container from './index';

describe('Container', () => {
  it('should render the children component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Container>
          <h1>Hello, world!</h1>
        </Container>
      </BrowserRouter>
    );
    const helloWorld = getByText('Hello, world!');
    expect(helloWorld).toHaveTextContent('Hello, world!');
  });
});
