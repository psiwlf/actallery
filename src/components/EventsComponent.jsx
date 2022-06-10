import React from 'react'
import EventComponent from './eventComponent'

const EventsComponent = ({events}) => {
  return (
    <>
    {events.map(e => <EventComponent event={e} />)}
    </>
  )
}

export default EventsComponent