import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Article from './article';

describe('Article Component', () => {
  const mockData = {
    title: 'Test Article',
    author: { displayName: 'John Doe' },
    body: { processed: '<p>Test article content</p>' },
    mediaImage: { mediaImage: { url: 'test-image.jpg' } },
  };

  it('renders the article title', () => {
    const { getByText } = render(<Article pageContext={{ data: mockData }} />);
    expect(getByText('Test Article')).toBeInTheDocument();
  });

  it('renders the author name', () => {
    const { getByText } = render(<Article pageContext={{ data: mockData }} />);
    expect(getByText('Author: John Doe')).toBeInTheDocument();
  });

  it('renders the article content', () => {
    const { getByText } = render(<Article pageContext={{ data: mockData }} />);
    expect(getByText('Test article content')).toBeInTheDocument();
  });

  it('renders the article image', () => {
    const { getByAltText } = render(<Article pageContext={{ data: mockData }} />);
    expect(getByAltText('Test Article')).toBeInTheDocument();
  });
});