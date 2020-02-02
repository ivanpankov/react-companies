import React from 'react';
import Notification from './Notification';
import { NotificationsDefaultProps, NotificationsPropTypes } from '../models';
import './styles.scss';

const Notifications = ({ notifications }) => {
  const { data } = notifications;

  return (
    <div className="notifications">
      {data.map(notification => (
        <Notification {...notification} key={notification.id} />
      ))}
    </div>
  );
};

Notifications.propTypes = {
  ...NotificationsPropTypes
};

Notifications.defaultProps = {
  ...NotificationsDefaultProps
};

export default Notifications;
