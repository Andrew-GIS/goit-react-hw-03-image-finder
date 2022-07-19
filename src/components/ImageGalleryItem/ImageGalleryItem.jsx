import React from "react";
import styles from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends React.Component{
	render() {
		return (
			<li className={styles.ImageGalleryItem}>
  				<img className={styles.ImageGalleryItem-image} src="" alt="" />
			</li>
		);
	}
}