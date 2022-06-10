import React from 'react'
import EventComponent from './eventComponent'

const EventsComponent = ({events}) => {
    // venue
    // city
    // country
    // datetime
    // const {venue, datetime:eventDate } = event;
    // const {name: place, city, country} = venue;
    // console.log('event 0 -------', venue)
  return (
    <>
    {events.map(e => <EventComponent event={e} />)}
    </>
    // <div style={{border: '1px solid yellow'}}>
    // {/* <img src={thumbImg} /> */}
    // {/* <h3>Name: {name}</h3>
    // <div>Facebook Url: {fbURL}</div> */}
    // {/* <h2>{venue}</h2> */}
    // <h4>Venue: {place}</h4>
    // <p>City: {city}</p>
    // <p>Country: {country}</p>
    // <p>date: {eventDate.split('T')[0]}</p>
// </div>
  )
}

export default EventsComponent