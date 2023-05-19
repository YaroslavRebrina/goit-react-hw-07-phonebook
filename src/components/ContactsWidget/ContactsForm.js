import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Audio } from 'react-loader-spinner';
import css from './ContactsForm.module.css';

import { useAddContactMutation } from 'store/contacts/contactsApi';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();

  const handlerInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const id = nanoid();

    addContact({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <>
      {isLoading ? (
        <Audio />
      ) : (
        <form className={css.form} onSubmit={onSubmit}>
          <label htmlFor={nameId}>
            <input
              className={css.input}
              onChange={handlerInput}
              placeholder="name"
              type="text"
              name="name"
              value={name}
              id={nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan"
              required
            />
          </label>

          <label htmlFor={numberId}>
            <input
              className={css.input}
              onChange={handlerInput}
              placeholder="tel"
              type="tel"
              name="number"
              value={number}
              id={numberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add phone number</button>
        </form>
      )}
    </>
  );
};
