import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export function SearchBar({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputName.trim() === '') {
      return alert('Please, I need to know what you are looking for!');
    }
    onSubmit(inputName);
    setInputName('');
  };

  const handleChange = e => {
    setInputName(e.target.value.toLowerCase());
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <HiSearch style={{ width: 30, height: 30 }} />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          name="inputName"
          value={inputName}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
