import React from 'react';

import CategoryForm from './CategoryForm';

import { useDispatch } from 'react-redux';

import {
  setCategories,
} from './actions';

export default function CategoryCreateContainer() {
  const dispatch = useDispatch();

  function handleCLick() {
    dispatch(setCategories);
  }

  return(
    <>
    <CategoryForm 
    onClick={handleCLick}/>
    </>
  );
}