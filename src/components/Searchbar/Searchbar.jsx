import React from 'react';
import styles from './Searchbar.module.css';

export class SearchBar extends React.Component{
	render() {
		return (
			// <header className={styles.searchbar}>
			// 	<form className={styles.searchForm}>
			// 		<button type="submit" className={styles.searchFormButton}>
			// 				<span>Search</span>
			// 		</button>

			// 		<input
			// 		className={styles.searchFormButtonLabel}
			// 		type="text"
			// 		autocomplete="off"
			// 		autofocus
			// 		placeholder="Search images and photos"
			// 		/>
			// 	</form>
			// </header>
			<header className={styles.searchbar}>
				<form className={styles.searchForm}>
					<button type="submit"
						className={styles.searchFormButton}>
							<span className={styles.searchFormButtonLabel}>Search</span>
					</button>

					<input
					className={styles.searchFormInput}
					type="text"
					autocomplete="off"
					autofocus
					placeholder="Search images and photos"/>
				</form>
			</header>
		);
	}
}