import Footer from '../footer/footer';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


test('shoud create component', () => {

  render(
    <MemoryRouter>
    <Footer/>  
    </MemoryRouter>
    );
  const linkElement = screen.getByText(/На связи в любое время/i);
  expect(linkElement).toBeInTheDocument();
});
