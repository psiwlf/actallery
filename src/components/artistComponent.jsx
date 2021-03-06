import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
const ArtistComponent = ({ artist }) => {
  if (artist.error) return;
  const { name, links, thumb_url: thumbImg } = artist;
  const fbURL = links
    ? links.filter((e) => e.type === 'facebook')[0].url
    : null;
  return (
    <Box w="100%">
      <Center>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          justifyContent="center"
          w={{ sm: '70%', md: '45rem' }}
          height={{ sm: '60%', md: '23rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
        >
          <Flex flex={1}>
            <Image
              objectFit="contain"
              borderRadius="lg"
              boxShadow="2xl"
              boxSize="100%"
              src={thumbImg}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              Music Artist
            </Text>
            {fbURL && (
              <Link
                href={fbURL}
                color={'blue.400'}
                isExternal="true"
                style={{ textDecoration: 'none' }}
              >
                <Button colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                  Connect
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default ArtistComponent;
