import React from 'react';
import { Badge, Box, Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue, } from '@chakra-ui/react';
  import { FaFacebook } from 'react-icons/fa';
const ArtistComponent = ({ artist }) => {
  // const  = props.facebook_page_url;
  // facebook_page_url
  // "links": [{"type": "website", "url": "http://www.postmalone.com/"},
  //  {"type": "facebook", "url": "https://www.facebook.com/postmalone"}]
  // image_url OR thumb_url generally same but different size
  // name
  //
  // console.log('props in artist', artist);
  const {
    name,
    facebook_page_url: fbURL,
    thumb_url: thumbImg,
    image_url: bgImg,
  } = artist;
  console.log('name in artist', name);
  return (
    <Box w='100%' borderWidth='1px' borderRadius='lg'>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        justifyContent="center"
        w={{ sm: '100%', md: '60%' }}
        height={{ sm: '100%', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1}>
          <Image
            objectFit="contain"
            borderRadius='lg'
            boxShadow='2xl'
            boxSize="100%"
            src={
              thumbImg
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            Music Artist
          </Text>
          <Link href={fbURL} color={'blue.400'} isExternal='true' style={{ textDecoration: "none" }}>
          <Button colorScheme={'facebook'} leftIcon={<FaFacebook />}>
              Connect
          {/* <Center>
          </Center> */}
        </Button>
          </Link>
        </Stack>
      </Stack>
      {/* <img src={thumbImg} />
      <h3>Name: {name}</h3>
      <div>Facebook Url: {fbURL}</div> */}

    </Box>
    // <div style={{ border: '1px solid brown' }}>
    // </div>
  );
};

export default ArtistComponent;
