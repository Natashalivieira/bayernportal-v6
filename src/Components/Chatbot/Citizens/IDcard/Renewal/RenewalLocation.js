import React from 'react';
import "./RenewalLocation.css";

const RenewalLocation = (props) => {
  const Services = [
    { text: "Ja, bitte!", 
      handler: props.actionProvider.handleRenewalResult, 
      id: 1 },
    { text: "Nein, danke.", 
    handler: props.actionProvider.handleRenewalAskCity, 
    id: 2 },
  ];

  const Markup = Services.map((service) => (
    <button
      className="renewallocation-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return <div className="renewallocation-container">{Markup}</div>;
};
  
  export default RenewalLocation;