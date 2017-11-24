json.album do
  json.extract! @album, :id, :title, :description, :author_id
  json.author_username @album.author.username
  json.album_cover_url @album.photos.first.img_url
end

# This is for the show page under each album
json.photos do
  json.array! @album.photos do |photo|
    json.extract! photo, :id, :img_url
  end
end
