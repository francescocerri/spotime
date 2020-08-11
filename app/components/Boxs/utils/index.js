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
    case 'artist': {
      const { name, images } = props;
      return { name, images };
    }
    default:
      return {};
  }
};
