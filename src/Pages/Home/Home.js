import React, { useState, useEffect, Suspense, lazy } from 'react';

import Tour, { Navigation, Dot, Controls, Arrow } from '../../index2';
import PropTypes from 'prop-types';
import '../../styles.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Style } from '../../style';

import { homeObjOne } from './Data';
import Mostusedlinks from "../../Components/Mostusedlinks/Mostusedlinks";
import IntroSection2 from "../../Components/IntroSection/IntroSection2";
import ScrollableLinks from "../../Components/ScrollableLinks/ScrollableLinks";
import Footer from "../../Components/Footer/Footer";

function Home() {

  const [isTourOpen, setOpen] = useState(false)
  const [customComps, setCustomComps] = useState(false)
  const disableBody = target => disableBodyScroll(target)
  const enableBody = target => enableBodyScroll(target)
  const accentColor = 'linear-gradient(to right, #1c8f9e, #5cb7b7)'

  useEffect(() => {
    function keyHandling(e) {
      if (e.keyCode === 75) {
        e.preventDefault()
        setOpen(true)
      }

      if (isTourOpen && e.keyCode === 13) {
        e.preventDefault()
        setCustomComps(!customComps)
      }
    }
    window.addEventListener('keyup', keyHandling)
    return () => window.removeEventListener('keyup', keyHandling)
  }, [isTourOpen, customComps])  

  return (
    <>
      <Style />
      <IntroSection2 openTour={() => setOpen(true)} {...homeObjOne} />
      <Suspense fallback={<React.Fragment />}>
        <Tour
            onAfterOpen={disableBody}
            onBeforeClose={enableBody}
            onRequestClose={() => setOpen(false)}
            steps={tourConfig}
            isOpen={isTourOpen}
            maskClassName="mask"
            className="helper"
            rounded={5}
            accentColor={accentColor}
          />
      </Suspense>
      <Mostusedlinks {...homeObjOne} />
      {/* <ScrollableLinks /> */}
      <Footer />
    </>
  );
}

const tourConfig = [
  {
    selector: '[data-tut="reactour__start"]',
    content:
      "Okay, dann lass uns gehen!",
  },
  {
    selector: '[data-tut="reactour__bot"]',
    content: 'Hier kannst du einfach alles an Bayern, deinen Online-Assistenten, fragen! Es ist der schnellste Weg, um Informationen zu finden. Gibst du einfach etwas ein und es wird dir helfen - es ist extrem intelligent!',
  },
  // {
  //   selector: '[data-tut="reactour__search"]',
  //   content: 'But you can also use our search bar if you prefer!',
  // },
  // {
  //   selector: '[data-tut="reactour__news"]',
  //   content: 'Hier können Sie einige der neuesten und relevantesten Nachrichten in Bayern lesen!',
  // },
  {
    selector: '[data-tut="reactour__links"]',
    content: 'Und hier findest du die am häufigsten aufgerufenen Links im Portal.',
  },
  // {
  //   selector: '[data-tut="reactour__linksbar"]',
  //   content: 'Du kannst jedoch jederzeit in die Kategorien scrollen, um alle Informationen anzuzeigen, die wir hier zur Verfügung haben!',
  // },
]

export default Home;