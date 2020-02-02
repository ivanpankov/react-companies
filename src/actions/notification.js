const SHOW_NOTIFICATION_TIMEOUT = 4000;

let notificationId = 5;

const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const addNotification = (notificationType, text, id) => ({
  type: ADD_NOTIFICATION,
  notificationType,
  text,
  id
});

const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const removeNotification = () => ({
  type: REMOVE_NOTIFICATION
});

export const notify = (notificationType, text) => dispatch => {
  const id = String(notificationId += 1);

  dispatch(addNotification(notificationType, text, id));

  setTimeout(() => {
    dispatch(removeNotification());
  }, SHOW_NOTIFICATION_TIMEOUT);
};
