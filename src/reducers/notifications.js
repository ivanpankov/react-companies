export const initialNotifications = [];

export default function(state = initialNotifications, action = {}) {
  switch (action.type) {
    // case 'SET_VISIBILITY_FILTER':
    //     return action.filter

    default:
      return state;
  }
}
