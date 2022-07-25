import React from "react";
import styles from "./ImageGalleryItem.module.css"

function ImageGalleryItem ({id, previewURL, tags, onClick}){
	
		return (
			<li className={styles.ImageGalleryItem} onClick={()=>onClick(id)}>
				<img className={styles['ImageGalleryItem-image']}
					src={previewURL}
					alt={tags} />
			</li>
		);
}

export default ImageGalleryItem;