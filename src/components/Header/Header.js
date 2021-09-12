import React from "react";
import classes from './Header.css';
import notificationIcon from '../../assets/notification.svg';
import logo from '../../assets/slick-logo.png';
import notification from '../../assets/notification.svg'

const header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.mobileView}>
        <img src={logo} alt="" style={{ width:'94px'}} />
        <span style={{display:'flex',justifyContent:'center',borderRadius:'8px' ,height:'32px',width:'32px', backgroundColor: '#6F8AE8'}}><img src={notification} alt="" style={{width:'13px'}} /></span>
      </div>
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
    </React.Fragment>
  );
}

export default header;