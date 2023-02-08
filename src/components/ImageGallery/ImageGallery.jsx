import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ gallery, openModal }) => {
  const renderGallery = () =>
    gallery.map(({ id, webformatURL, tags }, index) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        openModal={openModal}
        index={index}
      />
    ));
  return <Gallery>{gallery ? renderGallery() : null}</Gallery>;
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
