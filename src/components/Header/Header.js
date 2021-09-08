import React from "react";
import classes from './Header.css';
import notificationIcon from '../../assets/notification.svg';

const header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderHeight}>
        {/* agar text nahi bhejna ho to sirf ek empty string bhej dain. e.g. text={""} */}
        <p>{props.text}</p>
        <p id={classes.Heading}>{props.heading}</p>
      </div>
      <div className={classes.HeaderHeight.concat(" ", classes.Notification)}>
        <img src={notificationIcon} alt="bell" style={{ width: "1.25rem", margin: "auto" }} />
      </div>
    </div>
  );
}

export default header;