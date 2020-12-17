import React from 'react';
import "./RenewalAge.css";

const RenewalAge = (props) => {
  const Services = [
    { text: "Ja, ich bin über 16",
      handler: props.actionProvider.handleRenewalLocation, 
      id: 1 },
    { text: "Nein, ich unter 16", handler: () => {}, id: 2 },
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
  
  export default RenewalAge;