import React from 'react';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'store/contacts/contactsApi';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter);

  return name.toLowerCase().includes(filter.toLowerCase()) ? (
    <li key={id} className={css.item}>
      <p className={css.itemChild}>{name}</p>
      <p className={css.itemChild}>{number}</p>
      <button
        className={css.itemButton}
        id={id}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  ) : null;
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
