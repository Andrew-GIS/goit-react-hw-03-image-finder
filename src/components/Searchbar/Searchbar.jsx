import React from 'react';
import styles from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from './searchIcon.svg';
import { PropTypes } from 'prop-types';
import Notiflix from 'notiflix';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

export class SearchBar extends React.Component{
	static propTypes = {
    	onSubmit: PropTypes.func.isRequired,
	};
	
	state = {
		query: '',
	}

	onInputSubmit = (event) => {
		if (this.state.query.trim() === '') {
			return Notiflix.Notify.warning('No data to show, enter valid query',
            notiflixOptions,)
		}
		else{
			event.preventDefault();
			//console.log('object :>> ', this.state.query);
			this.props.onSubmit(this.state.query);
			this.setState({ query: '' })
		}
	}

	onChange = event => {
		this.setState({ query: event.target.value.toLowerCase().trim()});
	}

	render() {
		return (
			<header className={styles.searchbar}>
				<form className={styles.searchForm} onSubmit={this.onInputSubmit}>
					<button type="submit"
						className={styles.searchFormButton}>
							<SearchIcon/>
							<span className={styles.searchFormButtonLabel}>Search</span>
					</button>

					<input
						className={styles.searchFormInput}
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={this.state.query}
						onChange={this.onChange} />
				</form>
			</header>
		);
	}
}