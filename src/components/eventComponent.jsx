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
  // venue
  // city
  // country
  // datetime
  const { venue, datetime: eventDate } = event;
  const { name: place, city, country } = venue;
  return (
    <Box
      maxW={'400px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      <Stack p={6} color={useColorModeValue('gray.800', 'white')}>
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaLocationArrow} color="green.400" />
            <Stack direction={'row'} align={'center'}>
              <Text color={'gray.500'}>Venue</Text>
              <Text fontWeight={600}>{place}</Text>
            </Stack>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCity} color="green.400" />
            <Stack direction={'row'} align={'center'} justify="flex-start">
              <Text color={'gray.500'}>City</Text>
              <Text fontWeight={600}>{city}</Text>
            </Stack>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCity} color="green.400" />
            <Stack direction={'row'} align={'center'}>
              <Text color={'gray.500'}>Country</Text>
              <Text fontWeight={600}>{country}</Text>
            </Stack>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaRegCalendarAlt} color="green.400" />
            <Stack direction={'row'} align={'center'}>
              <Text color={'gray.500'}>Date</Text>
              <Text fontSize={'2xl'} fontWeight={600}>
                {eventDate.split('T')[0]}
              </Text>
            </Stack>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default EventComponent;
