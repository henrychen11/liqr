json.album do
  json.extract! @album, :id, :title, :description, :author_id
  json.author_username @album.author.username
  json.album_cover_url @album.album_cover_url
end
