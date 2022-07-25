import React from 'react';
import fetchPictures from "../services/api";
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallrey from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Notiflix from 'notiflix';
import Header from './Header/Header';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

export class App extends React.Component {
  state = {
    query: '',
    items: [],
    page: 1,
    status: 'idle',
    currentImage: '',
  }

  componentDidUpdate(_, prevState) {
    const { query, page, items } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      try {
        fetchPictures(query, page)
          .then(newItems => {            
          this.setState(({ items }) => ({
            items: [...items, ...newItems],
          }));
            if (newItems.length === 0) {
              return Notiflix.Notify.warning('No data to show, enter valid query', notiflixOptions);
            }
        })
       }
      catch (error) { 
        return Notiflix.Notify.error('Something went wrong, please try again or reload the page.', notiflixOptions);
      }
    }

    if (items !== prevState.items && page !== 1) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = (query) => {
    this.setState({ query: query, items: [] });
  }

  loadMore = () => {
    this.setState(({ page }) => ({page: page + 1}));
  }

  openLargePicture = ({ image }) => {
    this.setState({currentImage: image, status: 'modal'});
  }

  modalCloseHandle = () => {
    this.setState({ status: 'idle' });
  };

  errorHandler = () => {
    this.setState({ status: 'idle' });
    return Notiflix.Notify.warning('No data to show, enter valid query',
      notiflixOptions);
  }

  render() {    
      return (
        <>
          <SearchBar onSubmit={this.handleSubmit} />

          {this.state.status === "pending" && <Loader/>}
          {!(this.state.query) && <Header/>}
          {(this.state.items.length > 0) && this.state.status==="idle" &&
            <>
            <ImageGallrey items={this.state.items} onClick={this.openLargePicture} />
            <Button onClick={this.loadMore} />
            </>
          }
          
          {this.state.status === 'modal' && (
            <Modal
              closeAction={this.modalCloseHandle}
              imageURL={this.state.currentImage.imageURL}
              tags={this.state.currentImage.tags}/>
          )}
        </>
      );
  }
};