import React from "react";
import cssClasses from './Header.css';
import notificationIcon from '../../assets/notification.svg';

const header = (props) => {
  return (
    <div className={cssClasses.Header}>
      <div className={cssClasses.HeaderHeight}>
        {/* agar text nahi bhejna ho to sirf ek empty string bhej dain. e.g. text={""} */}
        <p>{props.text}</p>
        <p id={cssClasses.Heading}>{props.heading}</p>
      </div>
      <div className={cssClasses.HeaderHeight.concat(" ", cssClasses.Notification)}>
        <img src={notificationIcon} style={{width: "1.25rem", margin: "auto"}}/>
      </div>
    </div>
  );
}

export default header;