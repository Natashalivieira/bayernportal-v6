class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("Wer bist du?")) {
        this.actionProvider.intro()
      }
    if (lowerCaseMessage.includes("wer")) {
      this.actionProvider.intro()
    }
    if (lowerCaseMessage.includes("was is das")) {
      this.actionProvider.intro()
    }
    if (lowerCaseMessage.includes("hallo")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("servus")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("personalausweis")) {
      this.actionProvider.handleIDcard()
    }
    if (lowerCaseMessage.includes("meldebescheinigung")) {
      this.actionProvider.handleResRegLoc()
    }
    if (lowerCaseMessage.includes("wohnsitz anmeldung")) {
      this.actionProvider.handleResRegLoc()
    }
    if (lowerCaseMessage.includes("@")) {
      this.actionProvider.handleResComplete()
    }
    }

    
}
  
  
  export default MessageParser;