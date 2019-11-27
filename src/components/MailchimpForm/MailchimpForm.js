import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { colors, sizes, container } from '../../styles';

const MailchimpForm = ({ title, path, summary }) => {

  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email, listFields);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  return (
    <form onSubmit={this._handleSubmit(email, { listFields })}>
      <input type="text" name="email" placeholder="Email Address" />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default MailchimpForm;
