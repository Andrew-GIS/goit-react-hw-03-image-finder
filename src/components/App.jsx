import React from 'react';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallrey } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';


export class App extends React.Component {
  state = {
    showModal: false,
  }
    render() {
      return (
        <div>
          <SearchBar/>
          <ImageGallrey/>
          <Button />
          {this.state.showModal && <Modal/>}
        </div>
      );
  }
};
