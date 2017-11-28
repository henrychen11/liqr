export const getComment = (commentId) => (
  $.ajax({
    url: `api/comments/${commentId}`
  })
);

export const getPhotoComments = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`
  })
);

export const createComment = (comment, photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`,
    method: 'POST',
    data: { comment }
  })
);

export const updateComment = (comment) => (
  $.ajax({
    url: `api/comments/${comment.id}`,
    method: 'PATCH',
    data: { comment }
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'DELETE'
  })
);
