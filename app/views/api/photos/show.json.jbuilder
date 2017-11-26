json.extract! @photo, :id, :img_url, :title, :description, :author_id
json.author @photo.author.username
json.albums @photo.albums
