import React from "react";
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallrey ({items, onClick}){
		return (
			<ul className={styles.ImageGallery}>
				{items.map(item => {
					const { id, previewURL, tags } = item;
					return (
						<ImageGalleryItem
							key={id}
							id={id}
							previewURL={previewURL}
							tags={tags}
							onClick={() => onClick({image: item}) } />
					)
				})}
			</ul>
		);
}

export default ImageGallrey;