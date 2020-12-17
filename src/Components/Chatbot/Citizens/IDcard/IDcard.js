import React from 'react';
import "./IDcard.css";

const IDcard = (props) => {
  const IDServices = [
    { text: "Erstmalig beantragen", handler: () => {}, id: 1 },
    { text: "Ich möchte ihn verlängern", 
      handler: props.actionProvider.handleRenewalAge, 
      id: 2 },
    { text: "Ich habe meinen verloren", handler: () => {}, id: 3 },
    { text: "Der wurde gestohlen", handler: () => {}, id: 4 },
    { text: "Sonstiges", handler: () => {}, id: 4 },
  ];

  const IDMarkup = IDServices.map((idservice) => (
    <button
      className="idcard-button"
      key={idservice.id}
      onClick={idservice.handler}
    >
      {idservice.text}
    </button>
  ));

  return <div className="idcard-container">{IDMarkup}</div>;
};
  
  export default IDcard;