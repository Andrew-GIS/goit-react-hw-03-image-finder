import React from "react";
import styles from "./Button.module.css";

export class Button extends React.Component{
	render() {
		return (
			<button type="button" className={styles.Button}>
				Load More
			</button>
		);
	}
}