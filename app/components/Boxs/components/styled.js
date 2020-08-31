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
    cursor: 'pointer',
    position: 'relative',
    margin: '.25rem',
    '&:hover': {
      transition: 'all .5s',
      transform: 'scale(1.2)',
      zIndex: 2,
      // boxShadow: '0 5px 20px rgba(0,0,0,.8)',
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
    padding: '1rem 1.5rem',
  },
  gridSingleContent: {
    padding: '.5rem 0',
    cursor: 'pointer',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageRounded: {
    maxHeight: '14rem',
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
  navigateButton: {
    position: 'absolute',
    // top: '50%',
  },
  navigateButtonPrev: {
    left: '.5rem',
  },
  navigateButtonAfter: {
    right: '.5rem',
  },
}));
