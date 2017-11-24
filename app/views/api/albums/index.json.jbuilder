@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :author_id
    json.author_username album.author.username
    json.album_cover_url album.photos.first.img_url
  end
end
