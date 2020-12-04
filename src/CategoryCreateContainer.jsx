import React from 'react';

import CategoryForm from './CategoryForm';

import { useDispatch } from 'react-redux';

import {
  changeCategoryField,
  addCategories,
} from './actions';

export default function CategoryCreateContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeCategoryField({ name, value }));
  }

  function handleClick() {
    dispatch(addCategories());
  }

  return(
    <CategoryForm 
    onChange={handleChange}
    onClick={handleClick}/>
  );
}