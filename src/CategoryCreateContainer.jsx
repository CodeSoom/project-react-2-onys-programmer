import React from 'react';

import CategoryForm from './CategoryForm';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeCategoryField,
  addCategories,
} from './actions';

export default function CategoryCreateContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }))

  function handleChange({ name, value }) {
    dispatch(changeCategoryField({ name, value }));
  }

  function handleClick() {
    dispatch(addCategories());
  }

  return(
    <CategoryForm 
    categories={categories}
    onChange={handleChange}
    onClick={handleClick}/>
  );
}