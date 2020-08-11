import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>({
  labelRow: {
    width: '100%',
    height: '.1rem',
    backgroundColor: theme.palette.text.primary,
  },
  labelTitle: {
    paddingBottom: '.5rem',
  },
  boxsContainer: {
    width: '100%',
  },
  gridTitle: {
    position: 'relative',
    margin: '.25rem',
    '&:hover': {
      transition: 'all .5s',
      transform: 'scale(1.2)',
      zIndex: 2,
    },
  },
  descriptionContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.5)',
    height: '3rem',
    color: '#fff',
  },
  descriptionArea: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    padding: '.25rem',
  },
  title: {
    margin: 0,
  },
  subTitle: {
    fontSize: '.75rem',
  },
  gridContainer: {
    padding: '1rem',
  },
  gridSingleContent: {
    padding: '.5rem 0',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageRounded: {
    height: '14rem',
    borderRadius: '50%',
  },
  titleContainer: {
    textAlign: 'center',
    fontSize: '1.2rem',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleCenter: {
    color: '#fff',
    textShadow: '#000 1px 0 10px',
  },
}));
