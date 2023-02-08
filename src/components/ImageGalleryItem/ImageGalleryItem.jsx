import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, ImageGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, openModal, tags, index }) => {
  return (
    <GalleryItem>
      <ImageGalleryImage
        src={webformatURL}
        onClick={() => openModal(index)}
        alt={tags}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  tags: PropTypes.string,
  index: PropTypes.number.isRequired,
};
