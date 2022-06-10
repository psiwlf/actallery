import React, { useState } from 'react';
import ArtistComponent from '../components/artistComponent';
import EventComponent from '../components/eventComponent';
import EventsComponent from '../components/EventsComponent';
import SearchBar from '../components/SearchBar';
import { useArtistFetch } from '../useArtistFetch';

const SearchView = () => {
  // console.log('propss', props.state)
  const [searchTerm, setSearchTerm] = useState('');
  const { state, loading, error } = useArtistFetch(searchTerm);
  const event1 = [{
    id: '1',
    url: 'https://www.bandsintown.com/e/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
    datetime: '2022-07-02T12:00:00',
    title: 'Lollapalooza Stockholm 2022',
    description: '',
    venue: {
      location: 'Stockholm, Sweden',
      name: 'Lollapalooza Stockholm 2022',
      latitude: '59.32938',
      longitude: '18.06871',
      city: 'Stockholm',
      country: 'Sweden',
      region: '',
    },
    lineup: ['Post Malone'],
    offers: [
      {
        status: 'available',
        type: 'Tickets',
        url: 'https://www.bandsintown.com/t/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
      },
    ],
    artist_id: '7931668',
    on_sale_datetime: '',
    festival_start_date: '2022-07-01',
    festival_end_date: '2022-07-03',
    festival_datetime_display_rule: 'range',
    starts_at: '2022-07-02T12:00:00',
    ends_at: '',
    datetime_display_rule: 'datetime',
    bandsintown_plus: false,
  },
  {
    id: '2',
    url: 'https://www.bandsintown.com/e/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
    datetime: '2022-07-02T12:00:00',
    title: 'Lollapalooza Stockholm 2022',
    description: '',
    venue: {
      location: 'Stockholm, Sweden',
      name: 'Lollapalooza Stockholm 2022',
      latitude: '59.32938',
      longitude: '18.06871',
      city: 'Lahore',
      country: 'Pakistan',
      region: '',
    },
    lineup: ['Post Malone'],
    offers: [
      {
        status: 'available',
        type: 'Tickets',
        url: 'https://www.bandsintown.com/t/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
      },
    ],
    artist_id: '7931668',
    on_sale_datetime: '',
    festival_start_date: '2022-07-01',
    festival_end_date: '2022-07-03',
    festival_datetime_display_rule: 'range',
    starts_at: '2022-07-02T12:00:00',
    ends_at: '',
    datetime_display_rule: 'datetime',
    bandsintown_plus: false,
  },
  {
    id: '3',
    url: 'https://www.bandsintown.com/e/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
    datetime: '2022-07-02T12:00:00',
    title: 'Lollapalooza Stockholm 2022',
    description: '',
    venue: {
      location: 'Stockholm, Sweden',
      name: 'Lollapalooza Stockholm 2022',
      latitude: '59.32938',
      longitude: '18.06871',
      city: 'Karachi',
      country: 'PK',
      region: '',
    },
    lineup: ['Post Malone'],
    offers: [
      {
        status: 'available',
        type: 'Tickets',
        url: 'https://www.bandsintown.com/t/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
      },
    ],
    artist_id: '7931668',
    on_sale_datetime: '',
    festival_start_date: '2022-07-01',
    festival_end_date: '2022-07-03',
    festival_datetime_display_rule: 'range',
    starts_at: '2022-07-02T12:00:00',
    ends_at: '',
    datetime_display_rule: 'datetime',
    bandsintown_plus: false,
  },
  {
    id: '4',
    url: 'https://www.bandsintown.com/e/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
    datetime: '2022-07-02T12:00:00',
    title: 'Lollapalooza Stockholm 2022',
    description: '',
    venue: {
      location: 'Stockholm, Sweden',
      name: 'Lollapalooza Stockholm 2022',
      latitude: '59.32938',
      longitude: '18.06871',
      city: 'Mumbai',
      country: 'India',
      region: '',
    },
    lineup: ['Post Malone'],
    offers: [
      {
        status: 'available',
        type: 'Tickets',
        url: 'https://www.bandsintown.com/t/103014535?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
      },
    ],
    artist_id: '7931668',
    on_sale_datetime: '',
    festival_start_date: '2022-07-01',
    festival_end_date: '2022-07-03',
    festival_datetime_display_rule: 'range',
    starts_at: '2022-07-02T12:00:00',
    ends_at: '',
    datetime_display_rule: 'datetime',
    bandsintown_plus: false,
  },
];

  return (
    <div>
      <h1>Search Artists</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {/* {console.log('search term is: ', searchTerm)} */}
      {/* {console.log('state artist is: ', state.artist)} */}
      {/* {console.log('----state---: ', state)} */}
      {state.artist ? <ArtistComponent artist={state?.artist} /> : ''}
      {state.events ? <EventsComponent events={state.events} /> : ''}
    </div>
  );
};

export default SearchView;
