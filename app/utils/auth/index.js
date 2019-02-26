import request from '../request';

export const checkAuth = token => {
  if (!token) {
    return false;
  }
  const auth = request('/auth/check-token', {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.username) {
        return true;
      }
      return false;
    })
    .catch(e => {
      console.error(e);
      return false;
    });

  return auth;
};
