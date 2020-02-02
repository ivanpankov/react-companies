import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ notificationType, text }) => {
  return (
    <div
      className="toast notification"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="mr-auto notification-type">{notificationType}</strong>
      </div>
      <div className="toast-body">{text}</div>
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string,
  notificationType: PropTypes.oneOf(['info', 'error'])
};

export default Notification;
