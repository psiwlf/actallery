import React from 'react';
import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCity, FaLocationArrow, FaRegCalendarAlt } from 'react-icons/fa';
const EventComponent = ({ event }) => {
  const { venue, datetime: eventDate } = event;
  const { name: place, city, country } = venue;

  const fields = [
    { text: 'Venue', value: place, icon: FaLocationArrow },
    { text: 'City', value: city, icon: FaCity },
    { text: 'Country', value: country, icon: FaCity },
    { text: 'Date', value: eventDate.split('T')[0], icon: FaRegCalendarAlt },
  ];
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      <Stack p={6} color={useColorModeValue('gray.800', 'white')}>
        <List spacing={3}>
          {fields.map((e, idx) => {
            return (
              <ListItem key={idx} display="flex" alignItems="center">
                <ListIcon as={e.icon} color="green.400" />
                <Stack direction={'row'} align={'center'}>
                  <Text color={'gray.500'}>{e.text}</Text>
                  <Text fontWeight={600}>{e.value}</Text>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Box>
  );
};

export default EventComponent;
