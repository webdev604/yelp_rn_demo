// gets the current screen from navigation state
const getCurrentRouteName = navigationState => {
  if (navigationState && navigationState.index) {
    const route =
      navigationState.routes && navigationState.routes[navigationState.index];
    if (route === null || route === undefined) {
      return null;
    }
    // dive into nested navigators
    if (route.routes) {
      return getCurrentRouteName(route);
    }
    return route.routeName;
  }
  return null;
};

const screenTracking = ({getState}) => next => action => {
  const result = next(action);
  return result;
};

export default screenTracking;
