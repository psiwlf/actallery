import React from 'react';

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
    <div style={{ border: '1px solid brown' }}>
      <img src={thumbImg} />
      <h3>Name: {name}</h3>
      <div>Facebook Url: {fbURL}</div>
    </div>
  );
};

export default ArtistComponent;
