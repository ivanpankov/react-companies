import { NotificationsDefaultProps } from '../models';

export default function(state = NotificationsDefaultProps, action = {}) {
  const { type, ...notification } = action;

  switch (type) {
    case 'ADD_NOTIFICATION':
      return { ...state, data: [...state.data, notification] };

    case 'REMOVE_NOTIFICATION':
      return { ...state, data: state.data.slice(1) };

    default:
      return state;
  }
}
