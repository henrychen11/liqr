export const fetchPhotos = () => (
  $.ajax({
    mehod: 'GET',
    url: 'api/photos'
  })
);

export const fetchPhoto = (photoId) => (
  $.ajax({
    mehod: 'GET',
    url: `api/photos/${photoId}`
  })
);

export const fetchUserPhotos = (userId) => (
  $.ajax({
    mehod: 'GET',
    url: `api/users/${userId}/photos`
  })
);

export const createPhoto = (photo) => (
  $.ajax({
    url: 'api/photos',
    method: 'POST',
    data: { photo }
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    url: `api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  })
);

export const deletePhoto = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'DELETE'
  })
);
