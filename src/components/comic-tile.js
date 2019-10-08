import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    display: 'block',
    'max-width': '300px',
    'max-height': '200px',
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function formatImageUrl(thumbnail) {
  return `${thumbnail.path}.${thumbnail.extension}`;
}

function ComicTile(props) {
  const classes = useStyles();

  const { comic } = props;
  const { title, thumbnail, variantDescription } = comic;

  return (
    <GridListTile>
      <img src={formatImageUrl(thumbnail)} width='200' height='300' alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>{variantDescription}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
}

export default ComicTile;
  