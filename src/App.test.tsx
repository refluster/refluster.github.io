import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Projects } from './projects';

beforeEach(() => {
  // The live section calls the workforce API; keep the unit test offline.
  global.fetch = jest.fn(() => Promise.reject(new Error('offline'))) as jest.Mock;
  window.scrollTo = jest.fn();
});

const renderApp = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

test('renders the hero, every section and the footer', async () => {
  renderApp();
  // Wait for the live section to settle into its offline state.
  expect((await screen.findAllByText('unavailable')).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/problem worth solving/i);
  for (const id of ['about', 'services', 'agents', 'projects', 'contact']) {
    expect(document.getElementById(id)).toBeInTheDocument();
  }
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('lists every project with its period, role and press links', async () => {
  renderApp();
  await screen.findAllByText('unavailable');
  for (const project of Projects) {
    expect(screen.getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument();
    expect(screen.getByAltText(project.image.alt)).toBeInTheDocument();
    for (const article of project.articles) {
      expect(screen.getByRole('link', { name: article.title })).toHaveAttribute('href', article.url);
    }
  }
});

test('contact call to action opens a mail draft', async () => {
  renderApp();
  await screen.findAllByText('unavailable');
  const cta = screen.getByRole('link', { name: /email me/i });
  expect(cta).toHaveAttribute('href', expect.stringMatching(/^mailto:refluster@gmail\.com/));
});
