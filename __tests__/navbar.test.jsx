import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../pages/components/navBar';

const slugs = ['how', 'what', 'why'];

describe('NavBar', () => {
  it('renders a navbar and adds home', async () => {
    render(<NavBar slugs={slugs} />);

    const navbarLinks = await screen.getAllByRole('link');

    expect(navbarLinks).toHaveLength(4);
  });
});
