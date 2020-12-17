import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Bavaria from '../../Images/Lion.jpg';
import BotAvatarStyle from './BotAvatarStyle.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      width: 1100,
    },
}))

const BotAvatar = () => {
  
  const classes = useStyles();

  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
    {/* <div className={classes.root}> */}
      <div className="react-chatbot-kit-chat-bot-avatar-container">
      {/* <div className={classes.root}> */}
        <Avatar alt="BavariaBot" src={Bavaria} />
      </div>
    </div>
  );
};

export default BotAvatar;