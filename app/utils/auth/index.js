export const checkAuth = token => {
  if (!token) {
    return false;
  }
  return true;
};
