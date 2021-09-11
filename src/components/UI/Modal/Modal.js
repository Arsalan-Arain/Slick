import React from "react";
import classes from './Modal.css';
import btn from '../../../assets/cancel.png'

const modal = (props) => {
  return (
    props.show ? <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      <div className={classes.ModalBody}>
        <div className={classes.topRibbon}>
          <span>{props.title}</span>
        <img onClick={props.modalClosed} src={btn} alt="" className={classes.Cancel} />
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </div> : null
  )
}

export default modal;