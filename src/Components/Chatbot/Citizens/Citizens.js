import React from 'react';
import "./Citizens.css";

const Citizens = (props) => {
  const citizenServices = [
    { text: "Meldebescheinigung", handler: () => {}, id: 1 },
    { text: "Reisepass", handler: () => {}, id: 2 },
    { text: "Personalausweis", 
      handler: props.actionProvider.handleIDcard, 
      id: 3,
    },
    { text: "Sonstiges", handler: () => {}, id: 4 },
  ];

  const citizensMarkup = citizenServices.map((service) => (
    <button
      className="citizens-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return <div className="citizens-container">{citizensMarkup}</div>;
};
  
  export default Citizens;