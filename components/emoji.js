import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ type }) =>
  <i className={`em em-${type}`} />;

Emoji.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Emoji;
