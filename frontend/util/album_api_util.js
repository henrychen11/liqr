export const fetchAlbums = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/albums`
  })
);

export const fetchAlbum = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`
  })
);

export const createAlbum = (album) => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: { album }
  })
);

export const updateAlbum = (album) => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: { album }
  })
);

export const deleteAlbum = (albumId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumId}`,
  })
);

export const createPhotoAlbums = (photoAlbum) => (
  $.ajax({
    url: 'api/photo_albums/',
    method: 'POST',
    data: { photoAlbum }
  })
);

export const deletePhotoAlbums = (photoAlbumId) => (
  $.ajax({
    url: `api/photo_albums/${photoAlbumId}/`,
    method: 'DELETE'
  })
);
