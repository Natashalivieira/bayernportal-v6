import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types'
import { Container, Button } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';

import history from '../../Pages/history';

import {Link} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  TopLine,
  TopLine2,
  Heading,
} from './IntroSection2.elements';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: theme.palette.background.paper,
      },
      root2: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '50px',

      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
}))

export default function IntroSection({
  openTour,
  primary,
  lightTopLine,
  lightText,
}) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const preventDefault = (event) => event.preventDefault();


  return (
    <>
      <InfoSec>
        <Container>
          
             <InfoColumn2>
                <Heading lightText={lightText}>Willkommen bei eBayern!</Heading>
                <TopLine lightTopLine={lightTopLine}>Der offizielle Zugang zu Verwaltungsleistungen und Informationen in Bayern.</TopLine>
                <TopLine2 lightTopLine={lightTopLine}>Einfach, schnell und sicher.</TopLine2>
                <Paper component="form" className={classes.root2}>
                  <InputBase
                    className={classes.input}
                    placeholder="Suche"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton type="submit" className={classes.iconButton} aria-label="Mic">
                    <MicIcon />
                  </IconButton>
                  <Divider className={classes.divider} orientation="vertical" />
                  <IconButton             
                    variant="btn btn-success" 
                    onClick={() => history.push('/Search')}
                    color="submit" 
                    className={classes.iconButton} 
                    aria-label="search">
                    {/* <Link><SearchIcon to="/search"/></Link> */}
                    <SearchIcon to="/search"/>
                  </IconButton>
                </Paper>
                
            </InfoColumn2>

          
        </Container>
      </InfoSec>
    </>
  );
}

IntroSection.propTypes = {
  openTour: PropTypes.func.isRequired,
}