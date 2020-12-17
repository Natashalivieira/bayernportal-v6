import React from 'react';
import "./ResRegLoc.css";

const ResRegLoc = (props) => {
  const Services = [
    { text: "Fingerabdruckscann",
      handler: props.actionProvider.handleResRegResult, 
      id: 1 },
    { text: "Gesichtserkennung", handler: () => {}, id: 2 },
    { text: "Öffne meine Kamera", handler: () => {}, id: 3 },
  ];

  const Markup = Services.map((service) => (
    <button
      className="renewalage-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return <div className="renewalage-container">{Markup}</div>;
};
  
  export default ResRegLoc;