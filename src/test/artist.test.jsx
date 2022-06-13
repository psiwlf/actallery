import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import ArtistComponent from '../components/artistComponent';

const artist = {
  thumb_url: 'https://photos.bandsintown.com/thumb/8479721.jpeg',
  mbid: '0ab49580-c84f-44d4-875f-d83760ea2cfe',
  facebook_page_url: 'http://www.facebook.com/5330548481',
  image_url: 'https://photos.bandsintown.com/large/8479721.jpeg',
  tracker_count: 6257116,
  tracking: [],
  upcoming_event_count: 15,
  url: 'https://www.bandsintown.com/a/510?came_from=267&app_id=abc',
  support_url: '',
  name: 'Maroon 5',
  options: { display_listen_unit: false },
  links: [
    { type: 'twitter', url: 'http://twitter.com/maroon5' },
    { type: 'website', url: 'http://www.maroon5.com' },
    { type: 'facebook', url: 'https://www.facebook.com/maroon5/' },
  ],
  artist_optin_show_phone_number: false,
  id: '510',
};

describe('artist', () => {
  it('should render the components with data', () => {
    render(<ArtistComponent artist={artist} />);

    expect(screen.getByRole('heading'));
    expect(screen.getByRole('img'));
    expect(screen.getByRole('link'));
    expect(screen.getByText('Maroon 5'));
  });
  it('should render the connect button', () => {
    render(<ArtistComponent artist={artist} />);
    expect(screen.getByRole('button', { name: 'Connect' }));
  });
  it('should link to FB page', () => {
    render(<ArtistComponent artist={artist} />);
    const fbLink = screen.getByRole('link');
    expect(fbLink).toHaveProperty('href', 'https://www.facebook.com/maroon5/');
  });
  it('should throw if button-text is not Connect', () => {
    render(<ArtistComponent artist={artist} />);
    expect(() => screen.getByRole('button', { name: 'Konnect' })).toThrow();
  });
});
