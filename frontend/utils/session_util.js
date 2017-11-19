export const createUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'create',
    data: { user }
  });
};

export const createSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'create',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
