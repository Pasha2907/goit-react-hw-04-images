import React, { useEffect, useState } from 'react';
import { AppMain } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhoto } from './fetchPhoto';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export function App() {
  const [name, setName] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderGallery = (name, page) => {
      try {
        setIsLoading(true);

        const response = fetchPhoto(name, page);
        response.then(data => {
          if (!data.data.hits.length) {
            setIsLoading(false);
            return alert('Nothing found');
          }

          const renderPhoto = data.data.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => ({
              id,
              webformatURL,
              largeImageURL,
              tags,
            })
          );

          setIsLoading(false);
          setGallery(gallery => [...gallery, ...renderPhoto]);
        });
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    if (name !== '' || page !== 1) {
      renderGallery(name, page);
    }
  }, [name, page]);

  const onSubmit = value => {
    if (value !== name) {
      setName(value);
      setPage(1);
      setGallery([]);
      return;
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = id => {
    const photo = gallery.find(photo => photo.id === id);
    setShowModal({
      largeImageURL: photo.largeImageURL,
      tags: photo.tags,
    });
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <AppMain>
      <SearchBar onSubmit={onSubmit} />
      {error && alert(`Sorry, but something happened wrong: ${error.message}`)}
      {gallery.length !== 0 && (
        <ImageGallery gallery={gallery} openModal={openModal} />
      )}
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          largeImageURL={showModal.largeImageURL}
          tags={showModal.tags}
        />
      )}
      {isLoading && <Loader />}
      {gallery.length >= 12 && <Button nextPage={nextPage} />}
    </AppMain>
  );
}
