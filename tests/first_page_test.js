import { render, screen, fireEvent } from '@testing-library/react';
import FirstPost from '../path/to/FirstPost';

describe('First Post Page', () => {
  test('renders page title correctly', () => {
    render(<FirstPost />);
    const pageTitle = screen.getByText('First Post');
    expect(pageTitle).toBeInTheDocument();
  });

  test('renders h1 headings correctly', () => {
    render(<FirstPost />);
    const firstHeading = screen.getByText('First Post');
    const secondHeading = screen.getByText('Next.js');
    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
  });

  test('renders "Back to Basic" link correctly', () => {
    render(<FirstPost />);
    const backButton = screen.getByText('Back to Basic');
    expect(backButton).toBeInTheDocument();
  });

  test('navigates to homepage when "Back to Basic" link is clicked', () => {
    render(<FirstPost />);
    const backButton = screen.getByText('Back to Basic');
    fireEvent.click(backButton);
    // Write your assertion for navigation to the homepage here
  });
});