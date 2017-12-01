export const getPhotoTags = (photoId) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/tags`
  })
);

export const createTag = (tag, photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/tags`,
    method: 'POST',
    data: { tag }
  })
);

export const deleteTag = (tagId) => (
  $.ajax({
    url: `api/photos/${photoId}/tags`,
    method: 'DELETE'
  })
);
