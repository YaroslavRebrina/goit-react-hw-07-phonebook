import React from 'react';

import css from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.filter}>
      <input
        placeholder="filter"
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      ></input>
    </label>
  );
};
