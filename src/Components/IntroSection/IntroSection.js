import React from 'react';
import PropTypes from 'prop-types'
import { Container, Button } from '../../globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Chatbot from "react-chatbot-kit";
import config from "../Chatbot/config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  InfoColumn2,
  TopLine,
  Heading,
} from './IntroSection.elements';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: theme.palette.background.paper,
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
          <InfoRow>
            <InfoColumn data-tut="reactour__bot">
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                  />
            </InfoColumn>

             <InfoColumn2>
             <Heading lightText={lightText}>Willkommen im neuen BayernPortal!</Heading>
                <TopLine lightTopLine={lightTopLine}>Deine vertrauenswürdige, interaktive und schnellste Möglichkeit, auf Informationen zu öffentlichen Diensten zuzugreifen.</TopLine>
                <TopLine lightTopLine={lightTopLine}>Wenn du möchtest, können wir dir einen Rundgang durch das Portal geben.</TopLine>
                <Link>
                  <Button data-tut="reactour__start" onClick={openTour} big fontBig primary={primary}>
                    Los geht's!
                  </Button>
                </Link>
              
            </InfoColumn2>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

IntroSection.propTypes = {
  openTour: PropTypes.func.isRequired,
}