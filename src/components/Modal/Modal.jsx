import React from "react";
import styles from './Modal.module.css';

export class Modal extends React.Component{

	keyPressed = event => {
		if (event.code === 'Escape')
			this.props.closeAction();
	}

	componentDidMount() {
		window.addEventListener('keydown', this.keyPressed);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keyPressed);
	}

	render() {
		const { closeAction, imageURL, tags } = this.props;
		return (
			<div className={styles.Overlay} onClick={closeAction}>
  				<div className={styles.Modal}>
    				<img src={imageURL} alt={tags} />
  				</div>
			</div>
		);
	}
}