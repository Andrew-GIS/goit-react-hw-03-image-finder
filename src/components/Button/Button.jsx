import React from "react";
import styles from "./Button.module.css";

function Button ({onClick}){
	
	return (
			<div className={styles.Conteiner}>
				<button type="button" className={styles.Button} onClick={onClick}>
					Load More
				</button>
			</div>
		);
}

export default Button;