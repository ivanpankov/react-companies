export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const SHOW_NOTIFICATION_TIMEOUT = 3000;

let notificationId = 0;

// notification types
export const NOTIFICATION_TYPE_INFO = 'NOTIFICATION_TYPE_INFO';
export const NOTIFICATION_TYPE_WARNING = 'NOTIFICATION_TYPE_WARNING';
export const NOTIFICATION_TYPE_ERROR = 'NOTIFICATION_TYPE_ERROR';
export const NOTIFICATION_TYPE_SUCCESS = 'NOTIFICATION_TYPE_SUCCESS';

const addNotification = (notificationType, text, notificationId) => ({
  type: ADD_NOTIFICATION,
  notificationType,
  text,
  notificationId
});

const removeNotification = notificationId => ({
  type: REMOVE_NOTIFICATION,
  notificationId
});

const notify = (notificationType, text) => dispatch => {
  const id = (notificationId += 1);

  dispatch(addNotification(notificationType, text, id));

  setTimeout(() => {
    dispatch(removeNotification(id));
  }, SHOW_NOTIFICATION_TIMEOUT);
};

export const notification = {
  info: text => notify(NOTIFICATION_TYPE_INFO, text),
  warn: text => notify(NOTIFICATION_TYPE_WARNING, text),
  error: text => notify(NOTIFICATION_TYPE_ERROR, text),
  success: text => notify(NOTIFICATION_TYPE_SUCCESS, text)
};
