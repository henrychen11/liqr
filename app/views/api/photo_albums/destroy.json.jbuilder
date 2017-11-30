json.photoAlbm do
  json.extract! @photo_album, :id, :album_id, :photo_id
end

json.album do
  json.extract! @album, :id, :title, :description, :author_id
  json.author_username @album.author.username
  json.album_cover_url @album.album_cover_url
end
