export const getInfoByType = props => {
  switch (props.type) {
    case 'track': {
      const {
        album: { images, name: albumName },
        artists,
        name,
      } = props;
      return { images, albumName, artist: artists[0].name, name };
    }
    case 'artist':
    case 'playlist': {
      const { name, images } = props;
      return { name, images };
    }
    case 'album': {
      const { name, images, artists } = props;
      return { name, images, artist: artists[0].name };
    }
    default:
      return {};
  }
};
