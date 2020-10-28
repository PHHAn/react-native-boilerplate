// gets the current screen from navigation state
export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const index = navigationState.index;
  const route = navigationState.routes[index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  const child = route.state;
  if (child) {
    const indexChild = child.index;
    const routeChild = child.routes[indexChild];
    if (routeChild.routes) {
      return getActiveRouteName(route);
    }
    return routeChild.name;
  }
  return route.name;
}
