import React from "react";
import styles from './Modal.module.css';

export class Modal extends React.Component{
	render() {
		return (
			<div className={styles.Overlay}>
  				<div className={styles.Modal}>
    				<img src="" alt="" />
  				</div>
			</div>
		);
	}
}