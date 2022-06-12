import {
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import EventComponent from './eventComponent';

const EventsComponent = ({ events }) => {
  // below  is 1/3 syntax for responsiveness i.e. using useBreakpointValue hook
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <>
      {/* <VStack w="full" h="full" p={8} spacing={8} alignItems="flex-start"> */}
      {events.errorMessage ? (
        <Heading size="2xl">Artist Not Found</Heading>
      ) : (
        <VStack w="full" h="full" p={8} spacing={8}>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Upcoming Concerts</Heading>
            {events?.length < 1 && <Text>No upcoming concerts found</Text>}
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={3}>
            {events?.map((e, idx) => (
              <GridItem key={idx} colSpan={colSpan}>
                <EventComponent event={e} />
              </GridItem>
            ))}
          </SimpleGrid>
        </VStack>
      )}
    </>
  );
};

export default EventsComponent;
