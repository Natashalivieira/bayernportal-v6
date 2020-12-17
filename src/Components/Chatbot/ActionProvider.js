class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    intro() {
      const introMessage = this.createChatBotMessage("I bin Bavaria Digital Shapers, Tochter von Digital Shapers, Enkelin von DPS und Patentochter vom Bayerischen Staatsministerium für Digitales");
      this.updateChatbotState(introMessage);
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hallo du!")
      const initialMessage = this.createChatBotMessage("Lass mich wissen, wenn ich dir bei irgendetwas behilflich sein kann, indem du deine Frage oder ein Stichwort unten eingibst. Deine Eingaben werden selbstverständlich vertraulich behandelt.", 
      // { widget: "learningOptions" }
      );
      this.updateChatbotState(greetingMessage);
      this.updateChatbotState(initialMessage);
    };
    
    goodbye = () => {
      const goodbyeMessage = this.createChatBotMessage("In Ordung. Ich hoffe, ich konnte dir helfen. Einen schönen Tag noch!")
      this.updateChatbotState(goodbyeMessage);
    };
    
    categories = () => {
      const message = this.createChatBotMessage(
        "Let me know in which category you want to find information:", 
        { widget: "learningOptions" }
      );
      this.updateChatbotState(message);
    };

    handleCitizens = () => {
      const message = this.createChatBotMessage(
        "Fantastic! Here are the most searched services for citizens:",
        { widget: "citizens" }
      );
      this.updateChatbotState(message);
    };

    handleIDcard = () => {
      const message = this.createChatBotMessage(
        "Und was geht es?",
        { widget: "IDcard" }
      );
      this.updateChatbotState(message);
    };

    handleRenewalAge = () => {
      const message = this.createChatBotMessage(
        "Bist du über 16 Jahre alt?",
        { widget: "RenewalAge" }
      );
      this.updateChatbotState(message);
    };

    handleRenewalLocation = () => {
      const message = this.createChatBotMessage(
        "Super! Möchtest du wissen, wo deine nächstgelegenste Eirichtung ist?",
        { widget: "RenewalLocation" }
      );
      this.updateChatbotState(message);
    };
    
    handleRenewalResult = () => {
      const message = this.createChatBotMessage(
        "Super! Deine nächstgelegenste Einrichtung ist: Kreisverwaltungsreferat (KVR), Hauptabteilung II Bürgerangelegenheiten, Bürgerbüro Riesenfeldstraße, 80809 München.");
      const message2 = this.createChatBotMessage(
        "Du kannst das Bürgerbüro telefonisch unter 089 233-96000 erreichen oder direkt online einen Termin vereinbaren.",
        { widget: "RenewalResult" }
      );
      const message4 = this.createChatBotMessage("Brauchst du noch weitere Informationen?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(message2);
      this.updateChatbotState(message4);
    };

    handleForeigners = () => {
      const message = this.createChatBotMessage(
        "Fantastic! Here are the most searched services for foreigners:",
        { widget: "foreigners" }
      );
      this.updateChatbotState(message);
    };

    handleApplyVisa = () => {
      const message = this.createChatBotMessage(
        "Great! What kind of visa are you looking for?",
        { widget: "ApplyVisa" }
      );
      this.updateChatbotState(message);
    };

    handleGermanCourse = () => {
      const message = this.createChatBotMessage(
        "You will have to book an online appointment to make the application. Here are the documents you will need:"
      );
      const message2 = this.createChatBotMessage(
        "A valid passport, passport picture, confirmation of attendance of a language course with at least 20 hours/week, proof of adequate health insurance, proof of adequate funding, residence registration in the city, and the application form (in the website link)"
      );
      const message3 = this.createChatBotMessage(
        "Click on the buttons below and a new tab will open with the authorities website:",
        { widget: "GermanCourse" }
      );
      const message4 = this.createChatBotMessage("Brauchst du noch weitere Informationen?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(message2);
      this.updateChatbotState(message3);
      this.updateChatbotState(message4);
    };
    
    handleResRegLoc = () => {
      const message = this.createChatBotMessage(
        "Super! Ist der Ort, an dem du dich gerade befindest, derjenige, den du registrieren möchtest?",
        { widget: "ResRegLoc" }
      );
      this.updateChatbotState(message);
    };
    handleResVerif = () => {
      const message = this.createChatBotMessage(
        "Dann klickst du bitte auf die Schaltfläche unten, um deine Identität via Fingerabdruckscann oder Gesichtserkennung zu verifizieren, falls du dich auf deinem Handy befindest. Wenn nicht, bereitest du deinen Personalausweis oder Reisepass vor und zeigst ihn der Kamera.",
        { widget: "ResVerif" }
      );
      this.updateChatbotState(message);
    };
    handleResRegResult = () => {
      const message = this.createChatBotMessage("Verifiziert!");
      const message1 = this.createChatBotMessage("Perfekt! Wir haben dich gefunden und deine neue Wohnadresse in unserer Datenbank registriert.");
      const message2 = this.createChatBotMessage("Bitte schreib deine E-Mail auf und wir senden dir deine Meldebescheinigung mit einer elektronischen Signatur von KVR.");
      this.updateChatbotState(message);
      this.updateChatbotState(message1);
      this.updateChatbotState(message2);
    };
    handleResComplete = () => {
      const message = this.createChatBotMessage("Gesendet!");
      const message2 = this.createChatBotMessage("Brauchst du noch weitere Informationen?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(message2);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }

  }
  
  export default ActionProvider;