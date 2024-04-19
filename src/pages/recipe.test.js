import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Recipe from './recipe';

describe('Recipe Component', () => {
  const mockData = {
    title: 'Test Recipe',
    mediaImage: { mediaImage: { url: 'test-image.jpg' } },
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    recipeInstruction: { processed: '<p>Test instructions</p>' },
  };

  it('renders the recipe title', () => {
    const { getByText } = render(<Recipe pageContext={{ data: mockData }} />);
    expect(getByText('Test Recipe')).toBeInTheDocument();
  });

  it('renders the recipe image', () => {
    const { getByAltText } = render(<Recipe pageContext={{ data: mockData }} />);
    expect(getByAltText('Food Image')).toBeInTheDocument();
  });

  it('renders the ingredients list', () => {
    const { getByText } = render(<Recipe pageContext={{ data: mockData }} />);
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
  });

  it('renders the recipe instructions', () => {
    const { getByText } = render(<Recipe pageContext={{ data: mockData }} />);
    expect(getByText('Test instructions')).toBeInTheDocument();
  });
});