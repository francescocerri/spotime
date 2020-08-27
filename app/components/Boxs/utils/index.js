export const getInfoByType = props => {
  switch (props.type) {
    case 'track': {
      const {
        album: { images, name: albumName },
        artists,
        name,
        external_urls: { spotify: uri },
      } = props;
      return { images, albumName, artist: artists[0].name, name, uri };
    }
    case 'artist':
    case 'playlist': {
      const { name, images, external_urls: { spotify: uri } } = props;
      return { name, images, uri };
    }
    case 'album': {
      const { name, images, artists, external_urls: { spotify: uri } } = props;
      return { name, images, artist: artists[0].name, uri };
    }
    default:
      return {};
  }
};
